// useEffect(() => {
//     getBlogs();
// }, []);
//
// const getBlogs = async () => {
//     const blogRef = collection(db, "blogs");
//     console.log(blogRef);
//     const firstFour = query(blogRef, orderBy("title"), limit(4));
//     const docSnapshot = await getDocs(firstFour);
//     // распаковка
//     console.log(docSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
// };
