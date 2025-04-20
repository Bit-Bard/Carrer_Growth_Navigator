# Carrer_Growth_Navigator

<h3><b>Problem Statemnt :</b> Most of the student faced difficulties while choosing their carrer. A proper guidance is required while selecting. Proper counselling is needed but most of the student did,nt g et this facilities therefore they create a mess while choosing their carrer option</h3>

<h2>Therefore we came up with idea of Carrer Growth navigator which will <u>Help/Guide</u> you while choosing your Carrer </h2>
<p>A simple, user-friendly web application built with HTML, CSS, and JavaScript that helps students and beginners discover a suitable career path based on their interests and working style — guided by an AI Mentor-like experience!</p>

<h3>How it Works?</h3>
<ol>
  <li>An individual student have to choose option based on their skills</li>
  <li>After submiting the answer Navigator will analize your answer </li>
  <li>After Analizing website will suggests the role in which you suit most </li>
  <li>Proper Roadmaps will be given based on the specific role</li>
</ol>




<h2>What we learn?</h2>
<p>
  After writing a basic code in html, css, javascript which is fine but due to its avg looking UI. We decide to modify the raw code Folder: Normal_code into advance version by using AI which enhaced our code making it more professinal
</p>

<h2>Flow/Logic of the code </h2>

[AI_version[DEPLOYED]]([URL](https://celebrated-muffin-525af3.netlify.app/))


                ┌───────────────────────────┐
                │   Start Application       │
                └──────────┬────────────────┘
                           │
                           ▼
            ┌────────────────────────────────┐
            │  Display First Question (Q1)   │
            └──────────┬─────────────────────┘
                       │ (User selects option)
                       ▼
          ┌─────────────────────────────────────┐
          │ Store Answer in answers[] Array     │
          └──────────┬──────────────────────────┘
                     │
       ┌─────────────┴─────────────┐
       │ More Questions Remaining? │
       └─────────────┬─────────────┘
                     │ Yes
                     ▼
           ┌────────────────────┐
           │ Show Next Question │
           └─────────┬──────────┘
                     │
                     └── Loop Back ───► [ Store Answer ]

                    │ No
                    ▼

        ┌─────────────────────────────┐
        │ Run decideCareer(answers)   │
        │ Suggest Suitable Career     │
        └──────────┬──────────────────┘
                   │
                   ▼
  ┌───────────────────────────────────────┐
  │ Generate AI Mentor Message using Role │
  │ (generateMentorMessage function)      │
  └──────────┬────────────────────────────┘
             │
             ▼
  ┌───────────────────────────────────┐
  │ Display Career Roadmap + Resources│
  │ using roadmapDatabase lookup      │
  └──────────┬────────────────────────┘
             │
             ▼
       ┌────────────────────┐
       │ Show Final Output  │
       │ + Motivation Text  │
       └──────────┬─────────┘
                  │
                  ▼
            ┌───────────────┐
            │     END       │
            └───────────────┘




