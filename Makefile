# Git add, commit, and push with Gitmoji
git_acp:
	@if [ -z "$(msg)" ]; then \
		echo "Error: Commit message is required. Use make git_acp msg='<Gitmoji Commit Message>'"; \
		exit 1; \
	fi; \
	~/gitmoji_commit.sh "$(msg)"