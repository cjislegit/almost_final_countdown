import { ForwardedRef, forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className='result-modal' open>
      <h2>Your Score:</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>You stopped the timer with X seconds left.</p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
