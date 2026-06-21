# Generate an SSH key on your machine (replace with your email)
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start the ssh-agent in the background
eval "$(ssh-agent -s)"

# Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_ed25519

# Copy the SSH public key to your clipboard to paste into GitHub Settings
cat ~/.ssh/id_ed25519.pub