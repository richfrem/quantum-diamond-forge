#!/bin/bash

# Quantum Diamond Forge CLI

COMMAND=$1
ARG=$2
ARG3=$3
ARG4=$4

BASE_DIR=$(dirname "$0")
PROMPTS_DIR="$BASE_DIR/prompts"
ROLES_DIR="$PROMPTS_DIR/roles"
TEMPLATES_DIR="$BASE_DIR/templates"
SCRIPTS_DIR="$BASE_DIR/scripts"

function show_help {
    echo "Quantum Diamond Forge CLI"
    echo "Usage: ./forge.sh <command> [arguments]"
    echo ""
    echo "Core Commands:"
    echo "  init <project_name>   Create a new project folder with initial templates."
    echo "  start                 Copy the Interactive Kickoff prompt (Gemini)."
    echo "  prompt <step_number>  Copy the prompt for a specific step to clipboard."
    echo "                        Steps: 1-5"
    echo "  role <role_name>      Copy the prompt for a specific Expert Role."
    echo ""
    echo "Project Management:"
    echo "  adr \"Title\"           Create a new Architectural Decision Record."
    echo "  task \"Title\"          Create a new Task in the backlog."
    echo "  snap <output_file>    Capture a code snapshot."
    echo ""
    echo "  list                  List available prompts and roles."
    echo "  help                  Show this help message."
}

function copy_prompt {
    case $1 in
        0) FILE="00_kickoff.md" ;;
        1) FILE="01_product_spec.md" ;;
        2) FILE="02_tech_blueprint.md" ;;
        3) FILE="03_ui_designer.md" ;;
        4) FILE="04_scaffolder.md" ;;
        5) FILE="05_ide_agent.md" ;;
        *) echo "Invalid step number. Use 1-5."; exit 1 ;;
    esac

    if [ -f "$PROMPTS_DIR/$FILE" ]; then
        cat "$PROMPTS_DIR/$FILE" | pbcopy
        echo "✅ Prompt '$FILE' copied to clipboard!"
    else
        echo "❌ Error: Prompt file '$FILE' not found."
    fi
}

function copy_start {
    FILE="00_interactive_kickoff.md"
    if [ -f "$PROMPTS_DIR/$FILE" ]; then
        cat "$PROMPTS_DIR/$FILE" | pbcopy
        echo "🚀 Interactive Kickoff Prompt copied to clipboard!"
        echo "👉 Paste this into Gemini 1.5 Pro to begin."
    else
        echo "❌ Error: Prompt file '$FILE' not found."
    fi
}

function copy_role {
    ROLE_NAME=$1
    # Handle short names
    case $ROLE_NAME in
        backend) FILE="backend_developer.md" ;;
        architect) FILE="system_architect.md" ;;
        devops) FILE="devops_engineer.md" ;;
        qa) FILE="qa_engineer.md" ;;
        security) FILE="security_auditor.md" ;;
        *) FILE="${ROLE_NAME}.md" ;; # Try direct match
    esac

    if [ -f "$ROLES_DIR/$FILE" ]; then
        cat "$ROLES_DIR/$FILE" | pbcopy
        echo "✅ Role Prompt '$FILE' copied to clipboard!"
    else
        echo "❌ Error: Role file '$FILE' not found in $ROLES_DIR."
        echo "Available roles:"
        ls "$ROLES_DIR"
    fi
}

function init_project {
    if [ -z "$1" ]; then
        echo "❌ Error: Please specify a project name."
        exit 1
    fi

    if [ -d "$1" ]; then
        echo "❌ Error: Directory '$1' already exists."
        exit 1
    fi

    mkdir -p "$1"
    
    # Copy the entire structure
    echo "📦 Cloning Forge structure..."
    cp -r "$TEMPLATES_DIR" "$1/templates"
    cp -r "$SCRIPTS_DIR" "$1/scripts"
    cp -r "$PROMPTS_DIR" "$1/prompts"
    cp "$BASE_DIR/forge.sh" "$1/"
    
    # Create empty dirs
    mkdir -p "$1/docs/adr"
    mkdir -p "$1/TASKS/backlog"
    mkdir -p "$1/TASKS/active"
    mkdir -p "$1/TASKS/done"
    mkdir -p "$1/.github/workflows"
    mkdir -p "$1/tests"
    mkdir -p "$1/INBOX"

    # Initialize templates
    if [ -f "$TEMPLATES_DIR/BLUEPRINT.lock.md" ]; then
         cp "$TEMPLATES_DIR/BLUEPRINT.lock.md" "$1/"
    fi
    
    # Initialize Inbox
    echo "# Inbox\n\n**Drop Zone for AI Processing**\n\nPlace any drafts, notes, or external documents here that you want the Antigravity Agent to review, refactor, or integrate into the project.\n\n**Workflow:**\n1. Drag files here.\n2. Tell the Agent: \"Check the Inbox.\"\n3. The Agent will process them and move them to their permanent home." > "$1/INBOX/README.md"
    
    # Initialize Git Hooks
    if [ -d "$TEMPLATES_DIR/hooks" ]; then
        echo "🪝 Installing Git Hooks..."
        mkdir -p "$1/.git/hooks"
        cp "$TEMPLATES_DIR/hooks/pre-commit" "$1/.git/hooks/pre-commit"
        cp "$TEMPLATES_DIR/hooks/commit-msg" "$1/.git/hooks/commit-msg"
        cp "$TEMPLATES_DIR/hooks/post-commit" "$1/.git/hooks/post-commit"
        chmod +x "$1/.git/hooks/pre-commit"
        chmod +x "$1/.git/hooks/commit-msg"
        chmod +x "$1/.git/hooks/post-commit"
    fi
    
    echo "✅ Project '$1' initialized."
    echo "   - Created directory: $1"
    echo "   - Installed: Forge CLI, Scripts, Templates, Git Hooks"
    echo ""
    echo "Next Step: cd $1 && ./forge.sh start"
}

case $COMMAND in
    init)
        init_project "$ARG"
        ;;
    start)
        copy_start
        ;;
    prompt)
        copy_prompt "$ARG"
        ;;
    role)
        copy_role "$ARG"
        ;;
    adr)
        "$SCRIPTS_DIR/new_adr.sh" "$ARG"
        ;;
    task)
        "$SCRIPTS_DIR/new_task.sh" "$ARG"
        ;;
    snap)
        node "$SCRIPTS_DIR/capture_snapshot.js" "$ARG" "$ARG3" "$ARG4" "${@:5}"
        ;;
    list)
        echo "--- Core Prompts ---"
        ls "$PROMPTS_DIR" | grep -v "roles"
        echo ""
        echo "--- Expert Roles ---"
        ls "$ROLES_DIR"
        ;;
    help|*)
        show_help
        ;;
esac
