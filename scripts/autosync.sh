#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Auto-Sync started. Watching for git updates...${NC}"

while true; do
    # Fetch latest from remote without applying
    git fetch origin main > /dev/null 2>&1
    
    LOCAL=$(git rev-parse HEAD)
    REMOTE=$(git rev-parse origin/main)

    if [ "$LOCAL" != "$REMOTE" ]; then
        echo -e "${GREEN}🚀 New commit detected! Pulling changes...${NC}"
        git pull origin main
        echo -e "${BLUE}✅ Changes applied. Next.js will hot-reload UI changes.${NC}"
        echo -e "${BLUE}⚠️  If you changed package.json, please restart the server manually.${NC}"
    fi
    
    # Check every 5 seconds
    sleep 5
done
