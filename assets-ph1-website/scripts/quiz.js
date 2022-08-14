'use strict';
{
  const quizSet = [
    {
      question:
        "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
      img: "../img/quiz/img-quiz01.png",
      choices: ["約79万人", "約28万人", "約183万人"],
      note: "経済産業省 2019年3月 － IT 人材需給に関する調査",
      data: 0,
    },
    {
      question:
        "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
      img: "../img/quiz/img-quiz02.png",
      choices: ["X-TECH", "INTECH", "BIZZTECH"],
      data: 1,
    },
    {
      question: "IoTとは何の略でしょう？",
      img: "../img/quiz/img-quiz03.png",
      choices: [
        "Internet of Things",
        "Integrate into Technology",
        "Information on Tool",
      ],
      data: 2,
    },
    {
      question:
        "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
      img: "../img/quiz/img-quiz04.png",
      choices: ["Society 5.0", "CyPhy", "SDGs"],
      note: "Society5.0 - 科学技術政策 - 内閣府",
      data: 3,
    },
    {
      question:
        "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
      img: "../img/quiz/img-quiz05.png",
      choices: ["Web3.0", "NFT", "メタバース"],
      data: 4,
    },
    {
      question:
        "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
      img: "../img/quiz/img-quiz06.png",
      choices: ["約5倍", "約2倍", "約11倍"],
      note: "Accenture Technology Vision 2021",
      data: 5,
    },
  ];

  const Quiz = document.getElementById("js-quiz");
  const main_A_correct = document.getElementsByClassName("main_A_correct");
  const main_A_button = document.getElementsByClassName("main_A_button");
  const main_A_correct_content_text = document.getElementsByClassName("main_A_correct_content_text");

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(answer, data, frame) {
    if (answer.textContent === quizSet[data].choices[0]) {
      frame.classList.add("is-correct");
    } else {
      frame.classList.add("is-incorrect");
    }
  }

  function setSection() {
    for (let i = 0; i < quizSet.length; i++) {
      const main_quiz_frame = document.createElement("section");
      Quiz.appendChild(main_quiz_frame);
      main_quiz_frame.className = "main_quiz_frame";

      // main_Q
      const main_Q = document.createElement("div");
      main_quiz_frame.appendChild(main_Q);
      main_Q.className = "main_Q";

      const main_Q_icon = document.createElement("div");
      main_Q.appendChild(main_Q_icon);
      main_Q_icon.className = "main_Q_icon";
      main_Q_icon.textContent = `Q${i + 1}`;

      const main_Q_question = document.createElement("p");
      main_Q.appendChild(main_Q_question);
      main_Q_question.className = "main_Q_question js-question";

      const main_Q_img = document.createElement("img");
      main_Q.appendChild(main_Q_img);
      main_Q_img.className = "main_Q_img js-img";

      // main_Q_A
      const main_Q_A = document.createElement("div");
      main_quiz_frame.appendChild(main_Q_A);
      main_Q_A.className = "main_Q_A";

      const main_A_icon = document.createElement("div");
      main_Q_A.appendChild(main_A_icon);
      main_A_icon.className = "main_A_icon";
      main_A_icon.textContent = "A";

      const main_A_list = document.createElement("ul");
      main_Q_A.appendChild(main_A_list);
      main_A_list.className = "main_A_list js-choice-list";

      const main_A_correct = document.createElement("div");
      main_Q_A.appendChild(main_A_correct);
      main_A_correct.className = "main_A_correct";

      const main_A_correct_title = document.createElement("p");
      main_A_correct.appendChild(main_A_correct_title);
      main_A_correct_title.className = "main_A_correct_title";

      const main_A_correct_content = document.createElement("p");
      main_A_correct.appendChild(main_A_correct_content);
      main_A_correct_content.className = "main_A_correct_content";

      const main_A_correct_content_label = document.createElement("span");
      main_A_correct_content.appendChild(main_A_correct_content_label);
      main_A_correct_content_label.className = "main_A_correct_content_label";
      main_A_correct_content_label.textContent = "A";

      const main_A_correct_content_text = document.createElement("span");
      main_A_correct_content.appendChild(main_A_correct_content_text);
      main_A_correct_content_text.className = "main_A_correct_content_text";

      // main_note
      const main_note = document.createElement("div");
      main_quiz_frame.appendChild(main_note);
      main_note.className = "main_note";

      const main_note_icon = document.createElement("i");
      main_note.appendChild(main_note_icon);
      main_note_icon.className = "main_note_icon";

      const main_note_text = document.createElement("p");
      main_note.appendChild(main_note_text);
      main_note_text.className = "main_note_text js-note";
    }
  }

  function setTitle(frame) {
    if (frame.classList.contains("is-correct")) {
      frame.firstElementChild.textContent = "正解！";
      console.log("yes");
    } else if (frame.classList.contains("is-incorrect")) {
      frame.firstElementChild.textContent = "不正解...";
      console.log("wrong");
    }
  }

  function setQuiz() {
    setSection();

    const shuffledQuiz = shuffle([...quizSet]);
    shuffledQuiz.forEach((quiz, index) => {
      const Question = document.getElementsByClassName("js-question");
      Question[index].textContent = quiz.question;

      const Img = document.getElementsByClassName("js-img");
      Img[index].src = quiz.img;

      const shuffledChoices = shuffle([...shuffledQuiz[index].choices]);
      shuffledChoices.forEach((choice) => {
        const ChoiceList = document.getElementsByClassName("js-choice-list");
        const main_A_item = document.createElement("li");
        ChoiceList[index].appendChild(main_A_item);
        main_A_item.className = "main_A_item";

        const main_A_button = document.createElement("button");
        main_A_item.appendChild(main_A_button);
        main_A_button.className = "main_A_button";
        main_A_button.textContent = choice;

        const main_A_button_arrow = document.createElement("i");
        main_A_button.appendChild(main_A_button_arrow);
        main_A_button_arrow.className = "main_A_button_arrow";
      });

      const main_note = document.getElementsByClassName("main_note");
      const Note = document.getElementsByClassName("js-note");
      if (quiz.note === undefined) {
        main_note[index].classList.add("to-be-removed");
      } else {
        Note[index].textContent = quiz.note;
      }

      for (let i = 3 * index; i <= 3 * index + 2; i++) {
        main_A_button[i].addEventListener("click", () => {
          if (
            main_A_button[i].parentNode.parentNode.classList.contains("disabled")
          ) {
            return;
          }
          main_A_button[i].classList.add("is-selected");
          checkAnswer(main_A_button[i], quiz.data, main_A_correct[index]);
          main_A_button[i].parentNode.parentNode.classList.add("disabled");
          setTitle(main_A_correct[index]);
          main_A_correct_content_text[index].textContent = quiz.choices[0];
        });
      }

    });
  }

  setQuiz();
}
