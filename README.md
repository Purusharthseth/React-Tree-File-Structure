# 📁 React File Explorer

A simple, interactive file explorer built with React. This project allows users to add, edit, and delete files and folders in a nested tree structure, simulating a file system. It demonstrates recursive component rendering, state management, and basic CRUD operations in React.

---

## 🚀 Features

- **Recursive Tree Rendering**: Folders and files are displayed in a collapsible tree view.
- **Add File/Folder**: Add new files or folders to any folder.
- **Edit Node**: Rename any file or folder.
- **Delete Node**: Remove any file or folder (including its children).
- **Collapse/Expand Folders**: Click to show or hide folder contents.
- **Modern UI**: Uses [react-icons](https://react-icons.github.io/react-icons/) for intuitive actions.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```git clone https://github.com/your-username/react-file-explorer.git
cd react-file-explorer
```
### 2. Install Dependencies

```
npm install
```


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧩 Project Structure
```
src/
├── App.js # Main component, manages file tree state
├── Node.js # Recursive node component for files/folders
└── ...
```


---

## 📄 Usage

- **Add Folder**: Click the folder-plus icon next to any folder, enter a name, and submit.
- **Add File**: Click the file-plus icon next to any folder, enter a name, and submit.
- **Edit**: Click the pencil icon next to a node, enter the new name, and submit.
- **Delete**: Click the trash icon next to a node to remove it.
- **Collapse/Expand**: Click the caret to toggle folder visibility.

---

## ⚙️ Customization

- **Initial Data**: Modify the `files` array in `App.js` to change the starting file structure.
- **Styling**: Edit `App.css` or add your own styles for a custom look.
- **Icons**: Swap out [react-icons](https://react-icons.github.io/react-icons/) for your preferred icon set.

---

## 📦 Dependencies

- **React** (v18+)
- **react-icons**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📃 License

[MIT](LICENSE)

---

## 💡 Inspiration

Inspired by file explorers in popular IDEs like VSCode.

---

**Happy Coding!** 🚀
