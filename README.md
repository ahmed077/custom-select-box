# custom-select-box
  Custom Select Box Generator
  Required : 
  files = [jQuery 3+, bootstrap 3+, font-awesome 4.7+]
  in case of swapping formrs:
  contents = [creating a div with id="form-body", including each form in a separate file]
  
# Guidelines
# create new instance from constructor "SelectBox"
The Select box has 4 properties:
# 1 active     => Boolean value, default is false
# 2 container  => The original Select box you wish to recustomize, either get it with vanilla script or jquery
# 3 clickEvent => optional feature if you want to load different forms depends on the selected option 
#                 two value allowed, 'normal' ( default ) or 'swap' otherwise it will be reset to normal
# 4 forms      => in case of choosing 'swap' you have to provide an array of objects with two properties, value ( title to be added as the                value of the select box), and url ( link of the html file that includes your form )
    this.clickEvent = clickEvent || 'normal';
    this.forms = forms || [];
    this.container
    ex: var x = new SelectBox();
    x.clickEvent = 'swap';
    x.forms = [
        {
            value: 'Form1',
            url: '../forms/default.html'
        },
        {
            value: 'Form2',
            url: '../forms/optionone.html'
        }
    ];
    x.container = $('#mySelectBox') || document.getElementById('mySelectBox');
