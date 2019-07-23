// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Welcome to our experiment!
            <br />
            <br />
            Thank you for participating in our experiment about adjective interpretation in context.
            You will be given detailed instructions on the next page after clicking the button "Begin the Experiment".
            By clicking the button you confirm that you participate voluntarily. Please be informed that you can quit the experiment at any point without consequences.
            Then you will be asked to  complete a few warm-up trials before proceeding to the main experiment.
            <br />
            <br />`,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Instructions',
    text:  `Please read the instructions carefully before starting the experiment and
            make sure you can concentrate on the task without disturbance.

            <br />
            <br />
            The first part of the experiment consists of practice trials.
            You will see pictures of several objects.
            Please label the objects using the template provided.
            <br/>
            <br/>
            Plase press the 'Go to Trials' button to begin the warm-up trials.

            `,
    buttonText: 'go to trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
//const forced_choice_2A = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  //  trials: trial_info.forced_choice.length,
    // name should be identical to the variable name
    //name: 'forced_choice_2A',
    //data: trial_info.forced_choice,
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
//});

const warmup_trials1 = custom_textfield_warmup({
  name: 'warmup',
  title: 'Labeling task',
  trials: 3,
  data: trial_info.text_insertion_warmup1,
//  hook: {
//    after_response_enabled: check_response
//  }
});
const warmup_trials2 = custom_textfield_warmup({
  name: 'warmup',
  title: 'Labeling task',
  trials: 3,
  data: trial_info.text_insertion_warmup2,
//  hook: {
//    after_response_enabled: check_response
//  }
});

const context = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Instructions',
    text:  `
    You are viewing sequences of objects and describing them as they pass by.
    </br>
    Press the button 'Go to trials' to begin the main trials.
            `,
    buttonText: 'go to trials'
});

const main_trials1 = custom_textfield_main({
  name: 'main',
  title: 'Parades',
  trials: 3,
  data: _.shuffle(trial_info.text_insertion_main1)


});
const main_trials2 = custom_textfield_main({
  name: 'main',
  title: 'Parades',
  trials: 3,
  data: _.shuffle(trial_info.text_insertion_main2)


});
// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
