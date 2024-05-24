document.addEventListener('DOMContentLoaded', function() {
    const exercises = document.querySelectorAll('.exercise');
    const daysStreak = document.querySelector('.days');
    let streak = 0;

    exercises.forEach(exercise => {
        const plusButton = exercise.querySelector('.plus');
        const minusButton = exercise.querySelector('.minus');
        const count = exercise.querySelector('.count');
        let exerciseCount = parseInt(count.textContent);

        plusButton.addEventListener('click', () => {
            exerciseCount += 1;
            count.textContent = exerciseCount;
            updateStreak();
        });

        minusButton.addEventListener('click', () => {
            if (exerciseCount > 0) {
                exerciseCount -= 1;
                count.textContent = exerciseCount;
                updateStreak();
            }
        });
    });

    function updateStreak() {
        const totalCount = Array.from(exercises).reduce((acc, exercise) => {
            const count = parseInt(exercise.querySelector('.count').textContent);
            return acc + count;
        }, 0);

        if (totalCount > 0) {
            streak += 1;
            daysStreak.textContent = streak;
        } else {
            streak = 0;
            daysStreak.textContent = streak;
        }
    }
});
