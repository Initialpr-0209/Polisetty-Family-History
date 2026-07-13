CREATE TABLE family_members (
  id VARCHAR(80) PRIMARY KEY,
  full_name VARCHAR(160) NOT NULL,
  relation VARCHAR(80) NOT NULL,
  generation_number INT NOT NULL CHECK (generation_number BETWEEN 1 AND 5),
  birth_year INT NULL,
  death_year INT NULL,
  place VARCHAR(160) NOT NULL,
  occupation VARCHAR(160) NULL,
  biography TEXT NULL,
  photo_url VARCHAR(255) NULL,
  display_x INT NOT NULL DEFAULT 0,
  display_y INT NOT NULL DEFAULT 0,
  theme_color VARCHAR(20) NOT NULL DEFAULT '#53744c',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE family_relationships (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  member_id VARCHAR(80) NOT NULL,
  related_member_id VARCHAR(80) NOT NULL,
  relationship_type VARCHAR(40) NOT NULL CHECK (relationship_type IN ('parent', 'spouse')),
  CONSTRAINT fk_member FOREIGN KEY (member_id) REFERENCES family_members(id) ON DELETE CASCADE,
  CONSTRAINT fk_related_member FOREIGN KEY (related_member_id) REFERENCES family_members(id) ON DELETE CASCADE,
  CONSTRAINT unique_relationship UNIQUE (member_id, related_member_id, relationship_type)
);

CREATE TABLE family_notes (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  member_id VARCHAR(80) NOT NULL,
  note_text TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 1,
  CONSTRAINT fk_note_member FOREIGN KEY (member_id) REFERENCES family_members(id) ON DELETE CASCADE
);

CREATE TABLE family_events (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  member_id VARCHAR(80) NOT NULL,
  event_title VARCHAR(160) NOT NULL,
  event_year INT NULL,
  event_description TEXT NULL,
  CONSTRAINT fk_event_member FOREIGN KEY (member_id) REFERENCES family_members(id) ON DELETE CASCADE
);
