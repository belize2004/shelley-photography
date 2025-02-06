#!/bin/bash

# Define paths
SRC_DB=".tmp/data.db"
BACKUP_DIR=".tmp/db_backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/data_backup_$TIMESTAMP.db"

# Ensure backup directory exists
mkdir -p "$BACKUP_DIR"

# Copy the database
cp "$SRC_DB" "$BACKUP_FILE"

# Keep only the last 5 backups to save space
ls -tp "$BACKUP_DIR" | grep -v '/$' | tail -n +6 | xargs -I {} rm -- "$BACKUP_DIR/{}"

echo "Backup created at $BACKUP_FILE"
