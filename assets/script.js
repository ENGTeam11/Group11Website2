document.addEventListener('DOMContentLoaded', function() {
    const pdfMapping = {
      box1: 'https://charliepiper.github.io/',
      box2: 'assets/files/Change2.pdf',
      box3: 'assets/files/Impl2.pdf',
      box4: 'assets/files/Test2.pdf',
      box5: 'assets/files/Eval2.pdf',
      box6: 'assets/files/CI2.pdf',
      box7: 'https://github.com/ENGTeam11/11Game2',
      box8: 'assets/files/desktop-1.0.jar',
      box9: 'assets/files/Add2.pdf',
    };
  
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      box.addEventListener('click', function() {
        const boxId = this.id;
        const pdfUrl = pdfMapping[boxId];
        if(pdfUrl) {
          window.open(pdfUrl, '_blank');
        } else {
          console.error('PDF URL not found for box:', boxId);
        }
      });
    });
  });
  