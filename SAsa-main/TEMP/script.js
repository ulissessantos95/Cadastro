document.getElementById('imagem').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const imgPreview = document.createElement('img');
        imgPreview.src = e.target.result;
        imgPreview.alt = 'Prévia da imagem';
        imgPreview.style.maxWidth = '100%';
        imgPreview.style.marginTop = '20px';
  
        // Adiciona a imagem ao formulário ou à página
        const formSection = document.querySelector('.form-section');
        const existingPreview = document.querySelector('.img-preview');
        if (existingPreview) {
          existingPreview.remove(); // Remove a imagem anterior, se houver
        }
        formSection.appendChild(imgPreview);
      };
  
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (base64)
    }
  });
  