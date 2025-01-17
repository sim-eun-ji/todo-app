
const TodoTemplate = () => {
  // const boxs = [1,2,3,4,5];
  const boxs = Array.from({length:5},(_,idx)=>{ return idx+1});
  console.log(boxs)
  
  return (
    <div className="todo-template">
      <div>일정관리</div>
      {boxs.map((value,idx) => {
        return <div key={idx} className={`box-${value}`}>{value}</div>
      })
      }
    </div>
  );
};

export default TodoTemplate;