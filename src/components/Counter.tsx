import useSelector from '../hooks/useSelector';

function Count() {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>{`Count: ${count}`}</p>
    </div>
  );
}

export default Count;
