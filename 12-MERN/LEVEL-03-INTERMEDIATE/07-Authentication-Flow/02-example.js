// Complete MERN auth pipeline outline
// 1. React submits login credentials (fetch POST /api/login)
// 2. Express receives body, finds User model: User.findOne({ username })
// 3. Compare passwords: const isMatch = await bcrypt.compare(password, user.password)
// 4. Sign token: const token = jwt.sign({ userId: user._id }, SECRET)
// 5. Send back token: res.json({ token })
// 6. React saves token in state and attaches it to subsequent headers: Authorization: "Bearer " + token