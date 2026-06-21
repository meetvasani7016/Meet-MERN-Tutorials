// client/src/App.jsx
// const handleDelete = async (id) => {
//   // Optimistic update: filter first
//   setTasks(prev => prev.filter(t => t._id !== id));
//   const res = await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });
//   if (!res.ok) {
//      // Rollback logic if backend delete fails
//      refetchTasks();
//   }
// };