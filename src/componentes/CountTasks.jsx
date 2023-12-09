export const CountTasks = ({ object }) => {
  let count = 0;
  object.forEach((task) => {
    if (!task.finish) {
      count++;
    }
  });
  return (
    <div>
      <p
        className="text-Dark-Grayish-Blue 
                     text-xs
                     md:text-lg"
      >
        {count} items left
      </p>
    </div>
  );
};
