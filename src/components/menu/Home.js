function Home() {
  const students = [
    {
      name: "John Doe",
      age: 30,
    },
    {
      name: "Misheck Mudamburi",
      age: 67,
    },
    {
      name: "Mason Mount",
      age: 3,
    },
  ];
  return (
    <>
      {students.map((student) => (
        <ul key={Math.random * 100}>
          <li>{student.name}</li>
          <li>{student.age}</li>
        </ul>
      ))}
    </>
  );
}
export default Home;
