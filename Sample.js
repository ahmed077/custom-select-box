var forms = [
    {
        value: 'Form1',
        url: '../forms/form-1.html'
    },
    {
        value: 'Form2',
        url: '../forms/form-2.html'
    }
],
    x = new SelectBox(true, document.getElementsByTagName('select')[0], 'swap', forms);
// SelectBox(active, Original Select Box Element, TODO at select, forms array in case of swapping)