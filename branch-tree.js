const branchMembers = window.previewFullMembers || window.fullMembers || [];
const branchGenerationNames = window.previewGenerationNames || window.fullGenerationNames || {};
const branchGenerationColors = window.previewGenerationColors || window.fullGenerationColors || {};

const branchTree = document.querySelector("#branchTree");
const branchGenerationNav = document.querySelector("#branchGenerationNav");
const expandBranches = document.querySelector("#expandBranches");
const collapseBranches = document.querySelector("#collapseBranches");
const branchDetailModal = document.querySelector("#branchDetailModal");
const branchDetailClose = document.querySelector("#branchDetailClose");
const branchDetailHero = document.querySelector("#branchDetailHero");
const branchDetailGeneration = document.querySelector("#branchDetailGeneration");
const branchDetailName = document.querySelector("#branchDetailName");
const branchDetailRelation = document.querySelector("#branchDetailRelation");
const branchDetailGenerationText = document.querySelector("#branchDetailGenerationText");
const branchDetailSpouse = document.querySelector("#branchDetailSpouse");
const branchDetailParents = document.querySelector("#branchDetailParents");

const branchMemberMap = new Map(branchMembers.map((member) => [member.id, member]));

function branchInitials(name) {
  return name
    .replace(/\(Late\)/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(-2)
    .join("")
    .toUpperCase();
}

function memberCard(member) {
  const card = document.createElement("article");
  card.className = "branch-person-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open details for ${member.name}`);
  card.dataset.memberId = member.id;
  card.dataset.branchGeneration = String(member.generation);
  card.style.setProperty("--branch-color", branchGenerationColors[member.generation]);
  card.innerHTML = `
    <span class="branch-initials">${branchInitials(member.name)}</span>
    <span class="branch-person-copy">
      <strong>${member.name}</strong>
      <small>${branchGenerationNames[member.generation]} | ${member.relation}</small>
    </span>
  `;
  card.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openBranchDetail(member.id);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      openBranchDetail(member.id);
    }
  });
  return card;
}

function branchMemberName(id) {
  return branchMemberMap.get(id)?.name || "N/A";
}

function openBranchDetail(memberId) {
  const member = branchMemberMap.get(memberId);
  if (!member || !branchDetailModal) return;
  const generationName = branchGenerationNames[member.generation] || "Family Member";
  const spouseName = member.spouse ? branchMemberName(member.spouse) : "N/A";
  const parentNames = member.parents?.length ? member.parents.map(branchMemberName).join(", ") : "N/A";

  branchDetailHero.textContent = branchInitials(member.name);
  branchDetailHero.style.setProperty("--branch-color", branchGenerationColors[member.generation]);
  branchDetailGeneration.textContent = generationName;
  branchDetailName.textContent = member.name;
  branchDetailRelation.textContent = member.relation || "N/A";
  branchDetailGenerationText.textContent = `${member.generation}${member.generation === 1 ? "st" : member.generation === 2 ? "nd" : member.generation === 3 ? "rd" : "th"} Generation`;
  branchDetailSpouse.textContent = spouseName;
  branchDetailParents.textContent = parentNames;

  branchDetailModal.classList.add("open");
  branchDetailModal.setAttribute("aria-hidden", "false");
  branchDetailClose?.focus();
}

function closeBranchDetail() {
  if (!branchDetailModal) return;
  branchDetailModal.classList.remove("open");
  branchDetailModal.setAttribute("aria-hidden", "true");
}

function familyChildren(person, spouse) {
  const parentIds = new Set([person.id, spouse?.id].filter(Boolean));
  return branchMembers
    .filter((member) => member.parents?.some((parentId) => parentIds.has(parentId)))
    .sort((left, right) => left.x - right.x || left.name.localeCompare(right.name));
}

function familyHeading(person, spouse) {
  const couple = document.createElement("div");
  couple.className = "branch-couple";
  if (spouse) couple.classList.add("has-spouse");
  couple.appendChild(memberCard(person));
  if (spouse) couple.appendChild(memberCard(spouse));
  return couple;
}

function renderFamily(personId, depth, renderedIds) {
  const person = branchMemberMap.get(personId);
  if (!person || renderedIds.has(person.id)) return null;

  const spouse = person.spouse ? branchMemberMap.get(person.spouse) : null;
  renderedIds.add(person.id);
  if (spouse) renderedIds.add(spouse.id);

  const children = familyChildren(person, spouse).filter((child) => !renderedIds.has(child.id));
  const family = document.createElement(children.length ? "details" : "section");
  family.className = `branch-family${children.length ? "" : " branch-leaf"}`;
  family.dataset.depth = String(depth);
  family.style.setProperty("--depth", String(depth));

  if (children.length) {
    const summary = document.createElement("summary");
    summary.className = "branch-family-summary";
    summary.appendChild(familyHeading(person, spouse));
    family.appendChild(summary);

    const childList = document.createElement("div");
    childList.className = "branch-children";
    children.forEach((child) => {
      const childBranch = renderFamily(child.id, depth + 1, renderedIds);
      if (childBranch) childList.appendChild(childBranch);
    });
    family.appendChild(childList);
  } else {
    family.appendChild(familyHeading(person, spouse));
  }

  return family;
}

function renderGenerationNavigation() {
  Object.entries(branchGenerationNames).forEach(([generation, name]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.branchGenerationTarget = generation;
    button.style.setProperty("--generation-color", branchGenerationColors[generation]);
    button.innerHTML = `<i aria-hidden="true"></i><span>${generation}. ${name}</span>`;
    if (generation === "1") button.classList.add("active");
    button.addEventListener("click", () => {
      const target = branchTree.querySelector(`[data-branch-generation="${generation}"]`);
      if (!target) return;
      target.closest("details.branch-family")?.setAttribute("open", "");
      branchTree.querySelectorAll("details.branch-family").forEach((family) => {
        if (family.contains(target)) family.open = true;
      });
      branchGenerationNav.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("branch-focus");
      window.setTimeout(() => target.classList.remove("branch-focus"), 1200);
    });
    branchGenerationNav.appendChild(button);
  });
}

function setAllBranches(open) {
  branchTree.querySelectorAll("details.branch-family").forEach((family) => {
    family.open = open;
  });
}

function renderBranchTree() {
  const root = branchMembers.find((member) => member.generation === 1 && member.spouse);
  if (!root) return;
  const renderedIds = new Set();
  const rootFamily = renderFamily(root.id, 0, renderedIds);
  if (rootFamily) branchTree.appendChild(rootFamily);
}

if (branchTree && branchGenerationNav && expandBranches && collapseBranches) {
  expandBranches.addEventListener("click", () => setAllBranches(true));
  collapseBranches.addEventListener("click", () => {
    setAllBranches(false);
  });
  branchDetailClose?.addEventListener("click", closeBranchDetail);
  branchDetailModal?.addEventListener("click", (event) => {
    if (event.target === branchDetailModal) closeBranchDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeBranchDetail();
  });

  renderGenerationNavigation();
  renderBranchTree();
}
