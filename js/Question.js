class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.button = createButton('Submit');
    this.message = createElement("h2")
    //Create a input box to enter the number
    this.input11 = createInput("Enter correct options....");
    

    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3")
    this.options1 = createElement("h4")
    this.options2 = createElement("h4")
    this.options3 = createElement("h4")
    this.options4 = createElement("h4")
   



    
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
   this.input11.position(400,230)



    this.input1.position(150, 230);
    this.button.position(290, 300);

    this.question.html("Question - What starts and ends with letter E , but has only 1 letter in it ?")
    this.question.position(50,50);

    this.options1.html("1:Everyone")
    this.options2.html("2:Envelope")
    this.options3.html("3:Estimate")
    this.options4.html("4:Examble")

    this.options1.position(150,90);
    this.options2.position(150,120);
    this.options3.position(150,148);
    this.options4.position(150,181);





    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
