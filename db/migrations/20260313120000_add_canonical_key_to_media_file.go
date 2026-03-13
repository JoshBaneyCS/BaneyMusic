package migrations

import (
	"context"
	"database/sql"

	"github.com/pressly/goose/v3"
)

func init() {
	goose.AddMigrationContext(upAddCanonicalKey, downAddCanonicalKey)
}

func upAddCanonicalKey(_ context.Context, tx *sql.Tx) error {
	_, err := tx.Exec(`ALTER TABLE media_file ADD COLUMN canonical_key VARCHAR(32) DEFAULT '' NOT NULL`)
	if err != nil {
		return err
	}
	_, err = tx.Exec(`CREATE INDEX IF NOT EXISTS media_file_canonical_key ON media_file(canonical_key)`)
	return err
}

func downAddCanonicalKey(_ context.Context, tx *sql.Tx) error {
	_, err := tx.Exec(`DROP INDEX IF EXISTS media_file_canonical_key`)
	if err != nil {
		return err
	}
	_, err = tx.Exec(`ALTER TABLE media_file DROP COLUMN canonical_key`)
	return err
}
