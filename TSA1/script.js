let isResume = true;

document.getElementById('changeButton').addEventListener('click', function () {
    const body = document.body;
    const leftSide = document.querySelector('.left_side');
    const rightSide = document.querySelector('.right_side');
    const imgBox = document.querySelector('.imgbox img');
    const profileText = document.querySelectorAll('.profileText, .title, .contactInfo li');
    const skillsContainer = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress-bar .progress');

    imgBox.style.opacity = '0';

    setTimeout(() => {
        if (isResume) {
            imgBox.src = 'formalpic2.png';
        } else {
            imgBox.src = 'formal pic.png';
        }

        imgBox.style.opacity = '1';

        body.style.backgroundImage = isResume ? "url('bgresume2.png')" : "url('bgresume1.png')";
        leftSide.style.backgroundColor = isResume ? '#3c0002' : '#786200';
        rightSide.style.color = isResume ? '#444' : '#333';
        profileText.forEach(element => {
            element.style.color = isResume ? '#f5f5dc' : '#ffe6b6'; 
        });
        skillsContainer.style.backgroundColor = isResume ? '#4c2c2e' : '#3d3d2f';
        progressBars.forEach(bar => {
            bar.style.backgroundColor = isResume ? '#eecabc' : '#ffe0a3'; 
        });

        isResume = !isResume;
    }, 500);
});
