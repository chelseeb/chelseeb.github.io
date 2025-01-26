let isOriginal = true;


document.getElementById('changeButton').addEventListener('click', function () {
    const body = document.body;
    const leftSide = document.querySelector('.left_side');
    const rightSide = document.querySelector('.right_side');
    const imgBox = document.querySelector('.imgbox');
    const skillsContainer = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress-bar .progress');

    if (isOriginal) {
       
        body.style.backgroundImage = "url('bgresume2.png')";
        leftSide.style.backgroundColor = '#3c0002';
        rightSide.style.color = '#444';
        imgBox.style.borderColor = '#f5f5dc';
        skillsContainer.style.backgroundColor = '#4c2c2e';
        progressBars.forEach(bar => {
            bar.style.backgroundColor = '#eecabc'; 
        });
    } else {

        body.style.backgroundImage = "url('bgresume1.png')";
        leftSide.style.backgroundColor = '#786200';
        rightSide.style.color = '#333';
        imgBox.style.borderColor = '#ffc107';
        skillsContainer.style.backgroundColor = '#3d3d2f'; 
        progressBars.forEach(bar => {
            bar.style.backgroundColor = '#ffe0a3'; 
        });
    }

  
    isOriginal = !isOriginal;
});
