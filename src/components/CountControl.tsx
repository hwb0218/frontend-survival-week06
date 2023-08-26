import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

import { decrease, increase } from '../stores/Store';

function CountControl() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => dispatch(increase())}>Increase</button>
      <button type="button" onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}

export default CountControl;
