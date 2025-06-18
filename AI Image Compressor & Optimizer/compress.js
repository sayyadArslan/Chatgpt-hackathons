const input = document.getElementById('file');
const imagename = document.getElementById('imagename');
const preview = document.getElementById('preview');

const file = input.files[0];



input.addEventListener('change', () => {

  if (input.files.length > 0) {
    imagename.style.display = 'block';
    /*imagename.innerText = input.files[0].name;
    
        const 
    const reader = new FileReader();
    reader.onload = function (e) {
    preview.src = e.target.result;
    preview.style.display = 'block';
    }
    reader.readAsDataURL(file);*/
    const file = input.files[0];
    if (file) {

      imagename.innerText = file.size + ' bytes';
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
        preview.style.opacity = "100%";
      };
      reader.readAsDataURL(file);
    } else {
      imagename.innerText = "No file selected";
      preview.style.display = 'none';
      preview.src = '';
    }





  }
  else {
    imagename.innerText = 'No file Select';
  }
});

const compress = document.getElementById('compress-btn');
const newimage = document.getElementById('newimage');
const newsize = document.getElementById('newsize');
const download = document.getElementById('Download');

compress.addEventListener('click', () => {

  const file = input.files[0];


  if (!file) {
    alert('Please Select Image');
  }
  else {
    download.style.display = 'block';
    newsize.style.display = "block";
    newimage.style.opacity = "100%";
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const scale = 0.4;
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
        newimage.src = compressedDataUrl;
        const base64Length = compressedDataUrl.length - 'data:image/jpeg;base64,'.length;
        const fileSizeInBytes = 4 * Math.ceil(base64Length / 3);
        const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);




        newsize.innerText = `${fileSizeInKB} KB`;

      }
      img.src = e.target.result;




    }
    reader.readAsDataURL(file);



  }



});



download.addEventListener('click',()=>{



  if (!newimage.src) 
    {
    alert("Compress an image first.");
    return;
  }

  const a = document.createElement('a');
  a.href = newimage.src;
  a.download = 'compressed-image.jpg';
  a.click();


});
