/* ==========================================================
   RESOURCE LIBRARY DATA
   ----------------------------------------------------------
   To add a new resource, copy one block { ... }, paste it at
   the TOP of the list (so it appears first / newest), and
   fill in the details.

   fileDocx / filePdf:
          put both files in the /resources folder and write the
          filenames here, e.g. "resources/anger-volcano.docx" and
          "resources/anger-volcano.pdf". Leave both as "" if the
          resource isn't ready yet - the card will show a
          "coming soon" badge automatically.
   isNew: true shows a "New" badge. Reserved for resources that
          are actually ready to download, so it stays meaningful.
   ========================================================== */

const CATEGORIES = [
  "Emotional awareness",
  "Anxiety & worry",
  "Stress & overwhelm",
  "Anger & frustration",
  "Self-esteem & confidence",
  "Friendships & social skills",
  "Bullying",
  "Family & home life",
  "School life",
  "Behaviour & self-regulation",
  "Neurodiversity support",
  "Grief & loss",
  "Identity & belonging",
  "Kindness & empathy",
  "Resilience",
  "Mindfulness & relaxation",
  "Healthy habits",
  "Goal setting",
  "Decision making",
  "Online safety",
  "Transitions & change",
  "Safeguarding & personal safety",
  "Creative therapeutic resources",
  "Reward & motivation"
];

const RESOURCES = [
  /* ---------- Emotional awareness ---------- */
  {
    title: "Identifying Emotions",
    category: "Emotional awareness",
    description: "A starter worksheet that helps young people name what they're feeling using everyday words, moving beyond 'fine' or 'ok'.",
    how: "Use as an icebreaker at the start of a session, before deeper topics come up.",
    fileDocx: "resources/identifying-emotions.docx",
    filePdf: "resources/identifying-emotions.pdf",
    isNew: true
  },
  {
    title: "Feelings Wheel",
    category: "Emotional awareness",
    description: "A visual wheel of emotions, from broad feelings in the centre to more specific ones on the outer ring, for building emotional vocabulary.",
    how: "Point to the wheel and ask 'which bit feels closest to today?' rather than asking them to explain in words.",
    fileDocx: "resources/feelings-wheel.docx",
    filePdf: "resources/feelings-wheel.pdf",
    isNew: true
  },
  {
    title: "Mood Check-In Card",
    category: "Emotional awareness",
    description: "A simple daily or weekly check-in card for rating and naming mood over time.",
    how: "Keep a stack in a session folder and complete one at the start of every visit to spot patterns.",
    fileDocx: "resources/mood-check-in-card.docx",
    filePdf: "resources/mood-check-in-card.pdf",
    isNew: true
  },
  {
    title: "Emotion Scales",
    category: "Emotional awareness",
    description: "0-10 scales for common feelings (worry, anger, sadness) so young people can show intensity, not just presence.",
    how: "Use before and after a calming activity to show them the activity is working.",
    fileDocx: "resources/emotion-scales.docx",
    filePdf: "resources/emotion-scales.pdf",
    isNew: true
  },
  {
    title: "The Feelings Colour Map",
    category: "Emotional awareness",
    description: "A body outline where young people colour in where they feel emotions - tight shoulders, butterfly tummy, warm chest - building the words for what's happening inside.",
    how: "There are no right answers. Ask curious questions: 'What colour is worry today? Where does it sit?'",
    fileDocx: "resources/feelings-colour-map.docx",
    filePdf: "resources/feelings-colour-map.pdf",
    isNew: true
  },
  {
    title: "Naming Mixed Emotions",
    category: "Emotional awareness",
    description: "A worksheet for exploring how more than one feeling can be true at once, like being excited and nervous together.",
    how: "Introduce once single emotions feel comfortable - this one is a good next step.",
    fileDocx: "resources/naming-mixed-emotions.docx",
    filePdf: "resources/naming-mixed-emotions.pdf",
    isNew: true
  },

  /* ---------- Anxiety & worry ---------- */
  {
    title: "Worry Monsters",
    category: "Anxiety & worry",
    description: "A playful activity where young people draw or describe their worry as a monster, making it easier to talk about and shrink down to size.",
    how: "Works well with younger children; ask what the monster needs to feel smaller.",
    fileDocx: "resources/worry-monsters.docx",
    filePdf: "resources/worry-monsters.pdf",
    isNew: true
  },
  {
    title: "Circle of Control",
    category: "Anxiety & worry",
    description: "Two circles for sorting worries into what's within a young person's control and what isn't.",
    how: "Follow up by picking one small action from the inner circle to try this week.",
    fileDocx: "resources/circle-of-control.docx",
    filePdf: "resources/circle-of-control.pdf",
    isNew: true
  },
  {
    title: "Grounding Exercises",
    category: "Anxiety & worry",
    description: "A set of simple grounding techniques to use when anxiety feels overwhelming, including 5-4-3-2-1 and counting breaths.",
    how: "Practise together when calm so the steps are familiar before they're needed.",
    fileDocx: "resources/grounding-exercises.docx",
    filePdf: "resources/grounding-exercises.pdf",
    isNew: true
  },
  {
    title: "Coping Cards",
    category: "Anxiety & worry",
    description: "Small printable cards with one coping strategy each, designed to be cut out and carried.",
    how: "Let the young person choose their favourite 3-4 cards to keep in a pocket or pencil case.",
    fileDocx: "resources/coping-cards.docx",
    filePdf: "resources/coping-cards.pdf",
    isNew: true
  },
  {
    title: "Worry Time Planner",
    category: "Anxiety & worry",
    description: "A structured way to postpone worries to a set 'worry time' each day, rather than letting them take over.",
    how: "Agree a realistic worry time (10 minutes) and a signal for 'not now, later' during the day.",
    fileDocx: "resources/worry-time-planner.docx",
    filePdf: "resources/worry-time-planner.pdf",
    isNew: true
  },
  {
    title: "Safe Place Visualisation",
    category: "Anxiety & worry",
    description: "A guided script and worksheet for imagining a calm, safe place in detail, used to settle anxiety.",
    how: "Read the script slowly, pausing between senses, then ask them to draw or describe their place.",
    fileDocx: "resources/safe-place-visualisation.docx",
    filePdf: "resources/safe-place-visualisation.pdf",
    isNew: true
  },
  {
    title: "My Worry Jar",
    category: "Anxiety & worry",
    description: "A gentle activity for capturing worries on paper and 'putting them away', helping young people notice which worries they can control and which they can let go.",
    how: "Great as a session closer. Invite the young person to sort worries into 'mine to solve' and 'not mine to carry'.",
    fileDocx: "resources/my-worry-jar.docx",
    filePdf: "resources/my-worry-jar.pdf",
    isNew: true
  },

  /* ---------- Stress & overwhelm ---------- */
  {
    title: "Stress Bucket",
    category: "Stress & overwhelm",
    description: "A visual model showing how stress builds up like water in a bucket, and what 'taps' can let pressure out.",
    how: "Identify blockages (things adding stress) and taps (helpful releases) together.",
    fileDocx: "resources/stress-bucket.docx",
    filePdf: "resources/stress-bucket.pdf",
    isNew: true
  },
  {
    title: "Pressure Thermometer",
    category: "Stress & overwhelm",
    description: "A thermometer scale for rating how much pressure a young person feels, with prompts at each level.",
    how: "Use it as a quick daily check rather than only in a crisis moment.",
    fileDocx: "resources/pressure-thermometer.docx",
    filePdf: "resources/pressure-thermometer.pdf",
    isNew: true
  },
  {
    title: "Calming Activities Menu",
    category: "Stress & overwhelm",
    description: "A menu of quick calming techniques that take two minutes or less.",
    how: "Try a few together in-session so they know what actually helps before they need it.",
    fileDocx: "resources/calming-activities-menu.docx",
    filePdf: "resources/calming-activities-menu.pdf",
    isNew: true
  },
  {
    title: "Self-Care Menu",
    category: "Stress & overwhelm",
    description: "A worksheet for building a personalised list of self-care options across body, mind and connection.",
    how: "Encourage a mix of free and low-cost options so it's realistic for any budget.",
    fileDocx: "resources/self-care-menu.docx",
    filePdf: "resources/self-care-menu.pdf",
    isNew: true
  },
  {
    title: "Spotting Burnout Signs",
    category: "Stress & overwhelm",
    description: "A checklist of early warning signs of burnout in young people, for spotting overload before it peaks.",
    how: "Review together every few weeks rather than only when things feel critical.",
    fileDocx: "resources/spotting-burnout-signs.docx",
    filePdf: "resources/spotting-burnout-signs.pdf",
    isNew: true
  },

  /* ---------- Anger & frustration ---------- */
  {
    title: "Anger Iceberg",
    category: "Anger & frustration",
    description: "A worksheet showing anger as the visible tip of an iceberg, with feelings like fear or hurt hidden underneath.",
    how: "Ask what might be 'under the water' the next time anger shows up.",
    fileDocx: "resources/anger-iceberg.docx",
    filePdf: "resources/anger-iceberg.pdf",
    isNew: true
  },
  {
    title: "Anger Thermometer",
    category: "Anger & frustration",
    description: "A 0-10 scale for rating anger intensity with body signs and actions mapped to each level.",
    how: "Use retrospectively after an incident to build awareness of the build-up.",
    fileDocx: "resources/anger-thermometer.docx",
    filePdf: "resources/anger-thermometer.pdf",
    isNew: true
  },
  {
    title: "Trigger Tracker",
    category: "Anger & frustration",
    description: "A log for noting what happened just before anger flared, to spot patterns in triggers.",
    how: "Fill it in soon after an incident while details are fresh, not days later.",
    fileDocx: "resources/trigger-tracker.docx",
    filePdf: "resources/trigger-tracker.pdf",
    isNew: true
  },
  {
    title: "Pause Plan",
    category: "Anger & frustration",
    description: "A step-by-step plan for the pause between feeling angry and reacting - stop, breathe, choose.",
    how: "Rehearse the steps when calm so they become automatic under pressure.",
    fileDocx: "resources/pause-plan.docx",
    filePdf: "resources/pause-plan.pdf",
    isNew: true
  },
  {
    title: "Healthy Ways to Release Anger",
    category: "Anger & frustration",
    description: "A menu of physical and creative ways to let out anger safely, without harm to self or others.",
    how: "Let the young person pick 2-3 favourites and keep the list somewhere visible.",
    fileDocx: "resources/healthy-ways-to-release-anger.docx",
    filePdf: "resources/healthy-ways-to-release-anger.pdf",
    isNew: true
  },
  {
    title: "The Anger Volcano",
    category: "Anger & frustration",
    description: "A visual worksheet where young people map what bubbles under the surface before anger erupts - triggers, body signals and early warning signs.",
    how: "Best used one-to-one. Start at the bottom of the volcano and work upwards, naming feelings as they build.",
    fileDocx: "resources/anger-volcano.docx",
    filePdf: "resources/anger-volcano.pdf",
    isNew: true
  },

  /* ---------- Self-esteem & confidence ---------- */
  {
    title: "Strengths Inventory",
    category: "Self-esteem & confidence",
    description: "A worksheet for identifying personal strengths across different areas of life, not just school.",
    how: "Prompt with examples if they get stuck - 'what would a friend say you're good at?'",
    fileDocx: "resources/strengths-inventory.docx",
    filePdf: "resources/strengths-inventory.pdf",
    isNew: true
  },
  {
    title: "Compliment Cards",
    category: "Self-esteem & confidence",
    description: "Printable cards of genuine compliments to give and receive, building comfort with praise.",
    how: "Use in group settings so young people practise both giving and accepting kind words.",
    fileDocx: "resources/compliment-cards.docx",
    filePdf: "resources/compliment-cards.pdf",
    isNew: true
  },
  {
    title: "Achievement Tracker",
    category: "Self-esteem & confidence",
    description: "A simple log for recording small wins and achievements over time, however small they seem.",
    how: "Revisit the tracker on hard days as evidence of progress.",
    fileDocx: "resources/achievement-tracker.docx",
    filePdf: "resources/achievement-tracker.pdf",
    isNew: true
  },
  {
    title: "Positive Self-Talk",
    category: "Self-esteem & confidence",
    description: "A worksheet for noticing unhelpful self-talk and practising kinder, more balanced alternatives.",
    how: "Start with one repeated negative thought and build one alternative together.",
    fileDocx: "resources/positive-self-talk.docx",
    filePdf: "resources/positive-self-talk.pdf",
    isNew: true
  },
  {
    title: "Growth Mindset Activities",
    category: "Self-esteem & confidence",
    description: "Activities exploring the idea that abilities can grow with effort and practice, not just fixed talent.",
    how: "Use real examples from the young person's own life where effort paid off.",
    fileDocx: "resources/growth-mindset-activities.docx",
    filePdf: "resources/growth-mindset-activities.pdf",
    isNew: true
  },
  {
    title: "The Identity Wheel",
    category: "Self-esteem & confidence",
    description: "A wheel of prompts exploring who a young person is beyond school - strengths, values, interests, culture and the people who matter to them.",
    how: "Let them fill sections in any order. Celebrate every answer - the goal is noticing strengths, not completing the wheel.",
    fileDocx: "resources/identity-wheel.docx",
    filePdf: "resources/identity-wheel.pdf",
    isNew: true
  },

  /* ---------- Friendships & social skills ---------- */
  {
    title: "Healthy vs Unhealthy Friendships",
    category: "Friendships & social skills",
    description: "A comparison worksheet for spotting the signs of friendships that feel good versus ones that don't.",
    how: "Use general examples first before applying it to their own friendships, to keep it low-pressure.",
    fileDocx: "resources/healthy-vs-unhealthy-friendships.docx",
    filePdf: "resources/healthy-vs-unhealthy-friendships.pdf",
    isNew: true
  },
  {
    title: "Conflict Resolution",
    category: "Friendships & social skills",
    description: "A step-by-step guide for working through disagreements with friends calmly and fairly.",
    how: "Role-play a recent real disagreement using the steps.",
    fileDocx: "resources/conflict-resolution.docx",
    filePdf: "resources/conflict-resolution.pdf",
    isNew: true
  },
  {
    title: "Communication Skills",
    category: "Friendships & social skills",
    description: "A worksheet covering listening, body language and assertive speaking in friendships.",
    how: "Practise the skills in a low-stakes role play before applying them to real situations.",
    fileDocx: "resources/communication-skills.docx",
    filePdf: "resources/communication-skills.pdf",
    isNew: true
  },
  {
    title: "Setting Boundaries",
    category: "Friendships & social skills",
    description: "An activity for identifying personal boundaries and practising simple, respectful ways to say no.",
    how: "Normalise that boundaries can change and that's OK.",
    fileDocx: "resources/setting-boundaries.docx",
    filePdf: "resources/setting-boundaries.pdf",
    isNew: true
  },
  {
    title: "Making New Friends",
    category: "Friendships & social skills",
    description: "Prompts and conversation starters for building confidence in approaching new people.",
    how: "Rehearse a simple opener together before trying it for real.",
    fileDocx: "resources/making-new-friends.docx",
    filePdf: "resources/making-new-friends.pdf",
    isNew: true
  },
  {
    title: "Reading Social Cues",
    category: "Friendships & social skills",
    description: "A worksheet on recognising facial expressions, tone and body language in social situations.",
    how: "Useful alongside real or video examples to practise spotting cues in context.",
    fileDocx: "resources/reading-social-cues.docx",
    filePdf: "resources/reading-social-cues.pdf",
    isNew: true
  },
  {
    title: "The Friendship Recipe",
    category: "Friendships & social skills",
    description: "Young people 'cook up' their ideal friendship - choosing ingredients like kindness, trust and fun - then reflect on which ingredients their friendships have.",
    how: "Works well in small groups. Use the reflection side to open conversations about friendships that don't feel good.",
    fileDocx: "resources/friendship-recipe.docx",
    filePdf: "resources/friendship-recipe.pdf",
    isNew: true
  },

  /* ---------- Bullying ---------- */
  {
    title: "Types of Bullying",
    category: "Bullying",
    description: "An overview worksheet covering physical, verbal, relational and online bullying.",
    how: "Use to open a conversation about what a young person may be experiencing without assuming.",
    fileDocx: "resources/types-of-bullying.docx",
    filePdf: "resources/types-of-bullying.pdf",
    isNew: true
  },
  {
    title: "Responding Safely",
    category: "Bullying",
    description: "A worksheet on safe ways to respond to bullying in the moment and afterwards.",
    how: "Emphasise that telling a trusted adult is a strength, not 'telling tales'.",
    fileDocx: "resources/responding-safely.docx",
    filePdf: "resources/responding-safely.pdf",
    isNew: true
  },
  {
    title: "Trusted Adults Map",
    category: "Bullying",
    description: "An activity for mapping the trusted adults a young person can go to for different kinds of help.",
    how: "Keep the list realistic - a mix of home, school and other settings.",
    fileDocx: "resources/trusted-adults-map.docx",
    filePdf: "resources/trusted-adults-map.pdf",
    isNew: true
  },
  {
    title: "Building Resilience to Bullying",
    category: "Bullying",
    description: "Activities for building confidence and coping skills in response to bullying.",
    how: "Pair with the Bounce-Back Plan resource for a fuller toolkit.",
    fileDocx: "resources/building-resilience-to-bullying.docx",
    filePdf: "resources/building-resilience-to-bullying.pdf",
    isNew: true
  },
  {
    title: "Digital Bullying",
    category: "Bullying",
    description: "A worksheet focused specifically on online bullying - screenshotting, blocking, reporting and telling someone.",
    how: "Talk through the practical reporting steps for whichever platform is relevant.",
    fileDocx: "resources/digital-bullying.docx",
    filePdf: "resources/digital-bullying.pdf",
    isNew: true
  },

  /* ---------- Family & home life ---------- */
  {
    title: "Managing Conflict at Home",
    category: "Family & home life",
    description: "A guide for handling arguments and disagreements at home more calmly.",
    how: "Focus on one recurring conflict at a time rather than everything at once.",
    fileDocx: "resources/managing-conflict-at-home.docx",
    filePdf: "resources/managing-conflict-at-home.pdf",
    isNew: true
  },
  {
    title: "Divorce or Separation",
    category: "Family & home life",
    description: "A supportive worksheet for young people processing their parents' separation or divorce.",
    how: "Reassure that many feelings (relief, guilt, sadness) can all be normal at once.",
    fileDocx: "resources/divorce-or-separation.docx",
    filePdf: "resources/divorce-or-separation.pdf",
    isNew: true
  },
  {
    title: "New Siblings",
    category: "Family & home life",
    description: "An activity for processing feelings about a new baby or sibling joining the family.",
    how: "Validate mixed feelings like jealousy alongside excitement.",
    fileDocx: "resources/new-siblings.docx",
    filePdf: "resources/new-siblings.pdf",
    isNew: true
  },
  {
    title: "Changes at Home",
    category: "Family & home life",
    description: "A worksheet for young people adjusting to changes in their home situation, like moving or a new adult in the house.",
    how: "Break the change into what's staying the same as well as what's different.",
    fileDocx: "resources/changes-at-home.docx",
    filePdf: "resources/changes-at-home.pdf",
    isNew: true
  },
  {
    title: "Safe Adults Network",
    category: "Family & home life",
    description: "A mapping activity for identifying safe adults both inside and outside the home.",
    how: "Revisit this if home circumstances change.",
    fileDocx: "resources/safe-adults-network.docx",
    filePdf: "resources/safe-adults-network.pdf",
    isNew: true
  },
  {
    title: "My Family Tree",
    category: "Family & home life",
    description: "A flexible family-mapping sheet that welcomes every kind of family, helping young people show who is in their world and how close they feel to each person.",
    how: "Keep it open-ended - pets, friends and role models count too. Follow the young person's lead on who belongs.",
    fileDocx: "resources/my-family-tree.docx",
    filePdf: "resources/my-family-tree.pdf",
    isNew: true
  },

  /* ---------- School life ---------- */
  {
    title: "Exam Stress",
    category: "School life",
    description: "A worksheet with practical strategies for managing stress before and during exams.",
    how: "Use in the weeks leading up to exams, not just the night before.",
    fileDocx: "resources/exam-stress.docx",
    filePdf: "resources/exam-stress.pdf",
    isNew: true
  },
  {
    title: "Organisation Skills",
    category: "School life",
    description: "Tools for managing time, homework and belongings more easily.",
    how: "Start with one small system (like a single homework diary) before adding more.",
    fileDocx: "resources/organisation-skills.docx",
    filePdf: "resources/organisation-skills.pdf",
    isNew: true
  },
  {
    title: "Classroom Anxiety",
    category: "School life",
    description: "Strategies for managing anxiety triggered by classroom situations like being asked questions.",
    how: "Agree a discreet signal with a trusted teacher for when things feel too much.",
    fileDocx: "resources/classroom-anxiety.docx",
    filePdf: "resources/classroom-anxiety.pdf",
    isNew: true
  },
  {
    title: "Transition to Secondary School",
    category: "School life",
    description: "A worksheet preparing younger pupils for the move to secondary school.",
    how: "Use in the summer term before the move, and revisit in the first weeks after.",
    fileDocx: "resources/transition-to-secondary-school.docx",
    filePdf: "resources/transition-to-secondary-school.pdf",
    isNew: true
  },
  {
    title: "Time Management",
    category: "School life",
    description: "Simple planning tools for balancing schoolwork, activities and rest.",
    how: "Keep plans realistic - build in rest and downtime, not just tasks.",
    fileDocx: "resources/time-management.docx",
    filePdf: "resources/time-management.pdf",
    isNew: true
  },
  {
    title: "My Morning Bridge",
    category: "School life",
    description: "A step-by-step visual plan for the journey from waking up to walking through the school gates, breaking a big scary morning into small crossable steps.",
    how: "Build it with the young person and a parent or carer where possible, so home and school use the same steps.",
    fileDocx: "resources/my-morning-bridge.docx",
    filePdf: "resources/my-morning-bridge.pdf",
    isNew: true
  },

  /* ---------- Behaviour & self-regulation ---------- */
  {
    title: "Stop, Think, Choose",
    category: "Behaviour & self-regulation",
    description: "A simple three-step model for pausing before reacting in the moment.",
    how: "Practise the three steps with low-stakes scenarios before relying on it in real situations.",
    fileDocx: "resources/stop-think-choose.docx",
    filePdf: "resources/stop-think-choose.pdf",
    isNew: true
  },
  {
    title: "Impulse Control",
    category: "Behaviour & self-regulation",
    description: "Activities for building the pause between urge and action.",
    how: "Use games that require waiting or turn-taking to practise the skill playfully.",
    fileDocx: "resources/impulse-control.docx",
    filePdf: "resources/impulse-control.pdf",
    isNew: true
  },
  {
    title: "Reward Systems",
    category: "Behaviour & self-regulation",
    description: "A template for building a simple, motivating reward system for target behaviours.",
    how: "Keep rewards small, frequent and achievable at first, building up gradually.",
    fileDocx: "resources/reward-systems.docx",
    filePdf: "resources/reward-systems.pdf",
    isNew: true
  },
  {
    title: "Reflection Sheet",
    category: "Behaviour & self-regulation",
    description: "A structured sheet for reflecting on an incident afterwards - what happened, what helped, what to try next time.",
    how: "Use soon after an incident, in a calm, non-blaming way.",
    fileDocx: "resources/reflection-sheet.docx",
    filePdf: "resources/reflection-sheet.pdf",
    isNew: true
  },
  {
    title: "Problem Solving Steps",
    category: "Behaviour & self-regulation",
    description: "A step-by-step framework for working through a problem to find a workable solution.",
    how: "Work through a real, current problem together rather than a hypothetical one.",
    fileDocx: "resources/problem-solving-steps.docx",
    filePdf: "resources/problem-solving-steps.pdf",
    isNew: true
  },

  /* ---------- Neurodiversity support ---------- */
  {
    title: "Autism Understanding",
    category: "Neurodiversity support",
    description: "A friendly introduction to autism for young people who are autistic or want to understand a friend who is.",
    how: "Adapt language and depth to the young person's age and needs.",
    fileDocx: "resources/autism-understanding.docx",
    filePdf: "resources/autism-understanding.pdf",
    isNew: true
  },
  {
    title: "ADHD Strategies",
    category: "Neurodiversity support",
    description: "Practical strategies for managing attention, organisation and energy for young people with ADHD.",
    how: "Pick one or two strategies to try at a time rather than all at once.",
    fileDocx: "resources/adhd-strategies.docx",
    filePdf: "resources/adhd-strategies.pdf",
    isNew: true
  },
  {
    title: "Sensory Regulation",
    category: "Neurodiversity support",
    description: "A worksheet for identifying sensory triggers and preferences, and tools to self-regulate.",
    how: "Involve the young person in testing out sensory tools to see what actually helps them.",
    fileDocx: "resources/sensory-regulation.docx",
    filePdf: "resources/sensory-regulation.pdf",
    isNew: true
  },
  {
    title: "Executive Functioning",
    category: "Neurodiversity support",
    description: "Tools for supporting planning, organisation and task initiation.",
    how: "Break tasks into smaller steps than feels necessary at first.",
    fileDocx: "resources/executive-functioning.docx",
    filePdf: "resources/executive-functioning.pdf",
    isNew: true
  },
  {
    title: "Flexible Thinking",
    category: "Neurodiversity support",
    description: "Activities for practising flexible thinking when plans change or things don't go as expected.",
    how: "Use real, recent examples of unexpected change to practise together.",
    fileDocx: "resources/flexible-thinking.docx",
    filePdf: "resources/flexible-thinking.pdf",
    isNew: true
  },
  {
    title: "My Brain, My Way",
    category: "Neurodiversity support",
    description: "A strengths-first profile where young people describe how their brain works best - what helps, what's tricky, and what they'd like adults to know.",
    how: "Powerful when shared (with consent) with teachers. Let the young person choose exactly what goes on it.",
    fileDocx: "resources/my-brain-my-way.docx",
    filePdf: "resources/my-brain-my-way.pdf",
    isNew: true
  },

  /* ---------- Grief & loss ---------- */
  {
    title: "Memory Activities",
    category: "Grief & loss",
    description: "Creative activities for remembering and celebrating someone who has died.",
    how: "Let the young person lead on what they want to include or leave out.",
    fileDocx: "resources/memory-activities.docx",
    filePdf: "resources/memory-activities.pdf",
    isNew: true
  },
  {
    title: "Understanding Grief",
    category: "Grief & loss",
    description: "An age-appropriate explanation of grief and the range of feelings it can bring.",
    how: "Reassure there's no 'right' way to grieve or a set timeline.",
    fileDocx: "resources/understanding-grief.docx",
    filePdf: "resources/understanding-grief.pdf",
    isNew: true
  },
  {
    title: "Coping with Change After Loss",
    category: "Grief & loss",
    description: "A worksheet for processing the changes that follow a loss.",
    how: "Revisit at key dates like anniversaries, which can bring feelings back up.",
    fileDocx: "resources/coping-with-change-after-loss.docx",
    filePdf: "resources/coping-with-change-after-loss.pdf",
    isNew: true
  },
  {
    title: "Saying Goodbye",
    category: "Grief & loss",
    description: "A gentle activity for young people who didn't get to say goodbye, or want to say something more.",
    how: "This can be private - it doesn't need to be shared with anyone else.",
    fileDocx: "resources/saying-goodbye.docx",
    filePdf: "resources/saying-goodbye.pdf",
    isNew: true
  },
  {
    title: "Keeping Memories Alive",
    category: "Grief & loss",
    description: "A worksheet for creating ongoing ways to remember and stay connected to a person who has died.",
    how: "Suggest simple rituals like a memory box or annual tradition.",
    fileDocx: "resources/keeping-memories-alive.docx",
    filePdf: "resources/keeping-memories-alive.pdf",
    isNew: true
  },

  /* ---------- Identity & belonging ---------- */
  {
    title: "Values Exploration",
    category: "Identity & belonging",
    description: "An activity for identifying personal values and what matters most to a young person.",
    how: "Ask them to pick their top 3 values and give a real example of each.",
    fileDocx: "resources/values-exploration.docx",
    filePdf: "resources/values-exploration.pdf",
    isNew: true
  },
  {
    title: "Personal Identity",
    category: "Identity & belonging",
    description: "A worksheet exploring the different parts that make up who someone is.",
    how: "Encourage exploring identity beyond school role or behaviour label.",
    fileDocx: "resources/personal-identity.docx",
    filePdf: "resources/personal-identity.pdf",
    isNew: true
  },
  {
    title: "Belonging",
    category: "Identity & belonging",
    description: "A reflection worksheet on the places, people and groups where a young person feels they belong.",
    how: "Notice and name existing sources of belonging before looking for new ones.",
    fileDocx: "resources/belonging.docx",
    filePdf: "resources/belonging.pdf",
    isNew: true
  },
  {
    title: "Celebrating Differences",
    category: "Identity & belonging",
    description: "An activity celebrating what makes people different and why that's valuable.",
    how: "Use group settings to build appreciation of different backgrounds and experiences.",
    fileDocx: "resources/celebrating-differences.docx",
    filePdf: "resources/celebrating-differences.pdf",
    isNew: true
  },
  {
    title: "Respect",
    category: "Identity & belonging",
    description: "A worksheet exploring what respect looks and feels like, for self and others.",
    how: "Use real scenarios to test out what respectful choices could look like.",
    fileDocx: "resources/respect.docx",
    filePdf: "resources/respect.pdf",
    isNew: true
  },

  /* ---------- Kindness & empathy ---------- */
  {
    title: "Perspective Taking",
    category: "Kindness & empathy",
    description: "Activities for imagining situations from someone else's point of view.",
    how: "Use real, recent situations from the young person's own life to practise.",
    fileDocx: "resources/perspective-taking.docx",
    filePdf: "resources/perspective-taking.pdf",
    isNew: true
  },
  {
    title: "Acts of Kindness Menu",
    category: "Kindness & empathy",
    description: "A menu of simple kind acts to try for others and for themselves.",
    how: "Encourage trying one a week and noticing how it feels.",
    fileDocx: "resources/acts-of-kindness-menu.docx",
    filePdf: "resources/acts-of-kindness-menu.pdf",
    isNew: true
  },
  {
    title: "Empathy Scenarios",
    category: "Kindness & empathy",
    description: "Short scenarios for discussing how someone might be feeling and how to respond kindly.",
    how: "There are no wrong answers - the goal is discussion, not a single correct response.",
    fileDocx: "resources/empathy-scenarios.docx",
    filePdf: "resources/empathy-scenarios.pdf",
    isNew: true
  },
  {
    title: "Gratitude Journal",
    category: "Kindness & empathy",
    description: "A simple daily or weekly gratitude prompt sheet.",
    how: "Keep entries small and specific rather than general.",
    fileDocx: "resources/gratitude-journal.docx",
    filePdf: "resources/gratitude-journal.pdf",
    isNew: true
  },

  /* ---------- Resilience ---------- */
  {
    title: "Coping Toolbox",
    category: "Resilience",
    description: "An activity for building a personalised set of go-to coping tools.",
    how: "Keep the toolbox somewhere visible or accessible, like a physical box or list.",
    fileDocx: "resources/coping-toolbox.docx",
    filePdf: "resources/coping-toolbox.pdf",
    isNew: true
  },
  {
    title: "Problem Solving for Resilience",
    category: "Resilience",
    description: "A resilience-focused version of problem solving, emphasising options and small steps.",
    how: "Focus on one manageable problem rather than everything at once.",
    fileDocx: "resources/problem-solving-for-resilience.docx",
    filePdf: "resources/problem-solving-for-resilience.pdf",
    isNew: true
  },
  {
    title: "Learning from Mistakes",
    category: "Resilience",
    description: "A reflective worksheet reframing mistakes as part of learning rather than failure.",
    how: "Model this yourself by sharing a mistake you learned from.",
    fileDocx: "resources/learning-from-mistakes.docx",
    filePdf: "resources/learning-from-mistakes.pdf",
    isNew: true
  },
  {
    title: "Hope Mapping",
    category: "Resilience",
    description: "An activity for mapping hopes for the future and small steps toward them.",
    how: "Keep steps small and time-bound so progress feels achievable.",
    fileDocx: "resources/hope-mapping.docx",
    filePdf: "resources/hope-mapping.pdf",
    isNew: true
  },
  {
    title: "My Bounce-Back Plan",
    category: "Resilience",
    description: "A one-page plan young people build for hard days: things that help, people to talk to, kind words to remember and small steps to feel steadier.",
    how: "Revisit it every few sessions - plans grow as young people do. Encourage them to keep a copy somewhere safe.",
    fileDocx: "resources/my-bounce-back-plan.docx",
    filePdf: "resources/my-bounce-back-plan.pdf",
    isNew: true
  },

  /* ---------- Mindfulness & relaxation ---------- */
  {
    title: "Breathing Exercises",
    category: "Mindfulness & relaxation",
    description: "A set of simple breathing techniques, including 4-4-6 breathing, for calming the body.",
    how: "Practise breathing together first so it feels familiar before using it alone.",
    fileDocx: "resources/breathing-exercises.docx",
    filePdf: "resources/breathing-exercises.pdf",
    isNew: true
  },
  {
    title: "Progressive Muscle Relaxation",
    category: "Mindfulness & relaxation",
    description: "A guided script for tensing and releasing muscle groups to relax the body.",
    how: "Read the script slowly, allowing pauses between each muscle group.",
    fileDocx: "resources/progressive-muscle-relaxation.docx",
    filePdf: "resources/progressive-muscle-relaxation.pdf",
    isNew: true
  },
  {
    title: "Guided Mindfulness Script",
    category: "Mindfulness & relaxation",
    description: "A short guided mindfulness script for settling the mind.",
    how: "Keep sessions brief (2-5 minutes) for young people new to mindfulness.",
    fileDocx: "resources/guided-mindfulness-script.docx",
    filePdf: "resources/guided-mindfulness-script.pdf",
    isNew: true
  },
  {
    title: "Calm Colouring Sheet",
    category: "Mindfulness & relaxation",
    description: "A printable colouring sheet for quiet, screen-free relaxation.",
    how: "Offer as a low-pressure option for young people who find talking difficult at first.",
    fileDocx: "resources/calm-colouring-sheet.docx",
    filePdf: "resources/calm-colouring-sheet.pdf",
    isNew: true
  },
  {
    title: "Five Senses Grounding Card",
    category: "Mindfulness & relaxation",
    description: "A pocket-sized 5-4-3-2-1 grounding guide: five things you can see, four you can touch, three you can hear, two you can smell, one you can taste.",
    how: "Practise it together when calm first, so it's familiar when big feelings arrive. Print small enough for a pocket or pencil case.",
    fileDocx: "resources/five-senses-grounding-card.docx",
    filePdf: "resources/five-senses-grounding-card.pdf",
    isNew: true
  },

  /* ---------- Healthy habits ---------- */
  {
    title: "Sleep Routines",
    category: "Healthy habits",
    description: "A worksheet for building a calming, consistent bedtime routine.",
    how: "Introduce one small change at a time rather than a full routine overhaul.",
    fileDocx: "resources/sleep-routines.docx",
    filePdf: "resources/sleep-routines.pdf",
    isNew: true
  },
  {
    title: "Nutrition Basics",
    category: "Healthy habits",
    description: "A simple, non-judgemental overview of balanced eating for young people.",
    how: "Keep the focus on energy and feeling good, not weight or restriction.",
    fileDocx: "resources/nutrition-basics.docx",
    filePdf: "resources/nutrition-basics.pdf",
    isNew: true
  },
  {
    title: "Movement & Exercise Menu",
    category: "Healthy habits",
    description: "A menu of enjoyable ways to move the body, beyond formal sport.",
    how: "Help them find movement they actually enjoy, not just what's 'good for you'.",
    fileDocx: "resources/movement-and-exercise-menu.docx",
    filePdf: "resources/movement-and-exercise-menu.pdf",
    isNew: true
  },
  {
    title: "Screen Time Balance",
    category: "Healthy habits",
    description: "A worksheet for reflecting on screen use and finding a healthy balance.",
    how: "Focus on adding in other activities rather than only removing screen time.",
    fileDocx: "resources/screen-time-balance.docx",
    filePdf: "resources/screen-time-balance.pdf",
    isNew: true
  },
  {
    title: "Hydration Tracker",
    category: "Healthy habits",
    description: "A simple tracker and prompt sheet for building a habit of drinking enough water.",
    how: "Pair with a favourite bottle or reminder to build the habit.",
    fileDocx: "resources/hydration-tracker.docx",
    filePdf: "resources/hydration-tracker.pdf",
    isNew: true
  },

  /* ---------- Goal setting ---------- */
  {
    title: "SMART Goals",
    category: "Goal setting",
    description: "A worksheet for setting Specific, Measurable, Achievable, Relevant and Time-bound goals.",
    how: "Start with one small goal to build confidence before setting bigger ones.",
    fileDocx: "resources/smart-goals.docx",
    filePdf: "resources/smart-goals.pdf",
    isNew: true
  },
  {
    title: "Habit Tracker",
    category: "Goal setting",
    description: "A simple tracker for building a new habit day by day.",
    how: "Celebrate streaks, but reassure that missing a day doesn't mean starting over.",
    fileDocx: "resources/habit-tracker.docx",
    filePdf: "resources/habit-tracker.pdf",
    isNew: true
  },
  {
    title: "Reward Chart",
    category: "Goal setting",
    description: "A visual chart for tracking progress toward a goal with small rewards along the way.",
    how: "Agree rewards together so they feel motivating, not imposed.",
    fileDocx: "resources/reward-chart.docx",
    filePdf: "resources/reward-chart.pdf",
    isNew: true
  },
  {
    title: "Vision Board",
    category: "Goal setting",
    description: "A creative activity for visualising hopes and goals for the future.",
    how: "Encourage a mix of realistic and aspirational goals.",
    fileDocx: "resources/vision-board.docx",
    filePdf: "resources/vision-board.pdf",
    isNew: true
  },
  {
    title: "Progress Reflections",
    category: "Goal setting",
    description: "A worksheet for reviewing progress toward a goal and adjusting the plan.",
    how: "Use regularly (e.g. every few weeks) rather than only at the end.",
    fileDocx: "resources/progress-reflections.docx",
    filePdf: "resources/progress-reflections.pdf",
    isNew: true
  },

  /* ---------- Decision making ---------- */
  {
    title: "Pros and Cons",
    category: "Decision making",
    description: "A simple worksheet for weighing up the pros and cons of a decision.",
    how: "Use for real, current decisions rather than hypothetical ones where possible.",
    fileDocx: "resources/pros-and-cons.docx",
    filePdf: "resources/pros-and-cons.pdf",
    isNew: true
  },
  {
    title: "Thinking Through Consequences",
    category: "Decision making",
    description: "An activity for thinking through the possible consequences of different choices.",
    how: "Explore consequences for self and for others affected by the decision.",
    fileDocx: "resources/thinking-through-consequences.docx",
    filePdf: "resources/thinking-through-consequences.pdf",
    isNew: true
  },
  {
    title: "Values-Based Choices",
    category: "Decision making",
    description: "A worksheet for making decisions that align with personal values.",
    how: "Refer back to the Values Exploration resource if they've completed it.",
    fileDocx: "resources/values-based-choices.docx",
    filePdf: "resources/values-based-choices.pdf",
    isNew: true
  },
  {
    title: "Peer Pressure Scenarios",
    category: "Decision making",
    description: "Realistic scenarios for practising responses to peer pressure.",
    how: "Role-play a scenario and practise saying no in different ways.",
    fileDocx: "resources/peer-pressure-scenarios.docx",
    filePdf: "resources/peer-pressure-scenarios.pdf",
    isNew: true
  },

  /* ---------- Online safety ---------- */
  {
    title: "Digital Wellbeing",
    category: "Online safety",
    description: "A worksheet reflecting on how online activity affects mood and wellbeing.",
    how: "Focus on noticing patterns rather than setting strict rules.",
    fileDocx: "resources/digital-wellbeing.docx",
    filePdf: "resources/digital-wellbeing.pdf",
    isNew: true
  },
  {
    title: "Social Media Safety",
    category: "Online safety",
    description: "A guide to using social media safely and thinking critically about content seen online.",
    how: "Discuss real examples the young person has seen, with curiosity not judgement.",
    fileDocx: "resources/social-media-safety.docx",
    filePdf: "resources/social-media-safety.pdf",
    isNew: true
  },
  {
    title: "Gaming Balance",
    category: "Online safety",
    description: "A worksheet for reflecting on healthy gaming habits and balance with other activities.",
    how: "Ask what they enjoy about gaming specifically - social connection, achievement, escape - to guide the conversation.",
    fileDocx: "resources/gaming-balance.docx",
    filePdf: "resources/gaming-balance.pdf",
    isNew: true
  },
  {
    title: "Online Friendships",
    category: "Online safety",
    description: "A worksheet on staying safe in friendships and relationships formed online.",
    how: "Cover practical safety steps without dismissing the friendship as 'not real'.",
    fileDocx: "resources/online-friendships.docx",
    filePdf: "resources/online-friendships.pdf",
    isNew: true
  },
  {
    title: "Privacy Online",
    category: "Online safety",
    description: "An overview of protecting personal information and privacy online.",
    how: "Use real platform examples relevant to the young person.",
    fileDocx: "resources/privacy-online.docx",
    filePdf: "resources/privacy-online.pdf",
    isNew: true
  },

  /* ---------- Transitions & change ---------- */
  {
    title: "Starting a New School",
    category: "Transitions & change",
    description: "A worksheet preparing for the challenges and opportunities of starting a new school.",
    how: "Use in the weeks before the move and check in again after the first week.",
    fileDocx: "resources/starting-a-new-school.docx",
    filePdf: "resources/starting-a-new-school.pdf",
    isNew: true
  },
  {
    title: "Moving House",
    category: "Transitions & change",
    description: "An activity for processing the changes and feelings that come with moving home.",
    how: "Acknowledge losses (old friends, familiar places) as well as new opportunities.",
    fileDocx: "resources/moving-house.docx",
    filePdf: "resources/moving-house.pdf",
    isNew: true
  },
  {
    title: "The Change Curve",
    category: "Transitions & change",
    description: "A visual model of the typical emotional stages people go through during change.",
    how: "Reassure that it's normal to dip before things feel better.",
    fileDocx: "resources/the-change-curve.docx",
    filePdf: "resources/the-change-curve.pdf",
    isNew: true
  },
  {
    title: "Building Routines",
    category: "Transitions & change",
    description: "A worksheet for creating simple, steadying routines during a period of change.",
    how: "Keep new routines small and realistic at first.",
    fileDocx: "resources/building-routines.docx",
    filePdf: "resources/building-routines.pdf",
    isNew: true
  },
  {
    title: "Managing Uncertainty",
    category: "Transitions & change",
    description: "Strategies for coping when the future feels unclear or unpredictable.",
    how: "Focus on what can be controlled today, even when the bigger picture is uncertain.",
    fileDocx: "resources/managing-uncertainty.docx",
    filePdf: "resources/managing-uncertainty.pdf",
    isNew: true
  },

  /* ---------- Safeguarding & personal safety ---------- */
  {
    title: "Trusted Adults Network",
    category: "Safeguarding & personal safety",
    description: "An activity for identifying trusted adults a young person can turn to in different situations.",
    how: "Keep this updated as circumstances or relationships change.",
    fileDocx: "resources/trusted-adults-network.docx",
    filePdf: "resources/trusted-adults-network.pdf",
    isNew: true
  },
  {
    title: "Safe vs Unsafe Secrets",
    category: "Safeguarding & personal safety",
    description: "A worksheet distinguishing 'surprise' secrets that are OK from 'unsafe' secrets that should be shared.",
    how: "Use clear, concrete examples appropriate to the young person's age.",
    fileDocx: "resources/safe-vs-unsafe-secrets.docx",
    filePdf: "resources/safe-vs-unsafe-secrets.pdf",
    isNew: true
  },
  {
    title: "Consent and Boundaries",
    category: "Safeguarding & personal safety",
    description: "An age-appropriate worksheet on consent, personal boundaries and the right to say no.",
    how: "Adapt language and examples to the young person's age and understanding.",
    fileDocx: "resources/consent-and-boundaries.docx",
    filePdf: "resources/consent-and-boundaries.pdf",
    isNew: true
  },
  {
    title: "Emergency Plan",
    category: "Safeguarding & personal safety",
    description: "A simple plan for what to do and who to contact in an emergency or unsafe situation.",
    how: "Keep a copy somewhere accessible, like a phone or wallet.",
    fileDocx: "resources/emergency-plan.docx",
    filePdf: "resources/emergency-plan.pdf",
    isNew: true
  },
  {
    title: "Speaking Up",
    category: "Safeguarding & personal safety",
    description: "A worksheet building confidence and practical steps for speaking up about a worry or concern.",
    how: "Reassure that speaking up is a brave and right thing to do, always.",
    fileDocx: "resources/speaking-up.docx",
    filePdf: "resources/speaking-up.pdf",
    isNew: true
  },

  /* ---------- Creative therapeutic resources ---------- */
  {
    title: "Conversation Cards",
    category: "Creative therapeutic resources",
    description: "A set of open-ended conversation starter cards for sessions.",
    how: "Let the young person pick a card at random to reduce the pressure of choosing a topic.",
    fileDocx: "resources/conversation-cards.docx",
    filePdf: "resources/conversation-cards.pdf",
    isNew: true
  },
  {
    title: "Journal Prompts",
    category: "Creative therapeutic resources",
    description: "A set of reflective journal prompts for exploring thoughts and feelings in writing.",
    how: "There's no need to share every entry - some can stay private.",
    fileDocx: "resources/journal-prompts.docx",
    filePdf: "resources/journal-prompts.pdf",
    isNew: true
  },
  {
    title: "Colouring Sheets",
    category: "Creative therapeutic resources",
    description: "Printable colouring sheets for calm, screen-free creative time.",
    how: "Offer as a quiet activity alongside conversation, not instead of it.",
    fileDocx: "resources/colouring-sheets.docx",
    filePdf: "resources/colouring-sheets.pdf",
    isNew: true
  },
  {
    title: "Comic Strip Activity",
    category: "Creative therapeutic resources",
    description: "A blank comic strip template for telling a story about a feeling or situation.",
    how: "Great for young people who find drawing easier than talking directly.",
    fileDocx: "resources/comic-strip-activity.docx",
    filePdf: "resources/comic-strip-activity.pdf",
    isNew: true
  },
  {
    title: "Story Completion",
    category: "Creative therapeutic resources",
    description: "Unfinished story starters for young people to complete in their own words.",
    how: "Notice themes in how they choose to end the story, without over-interpreting.",
    fileDocx: "resources/story-completion.docx",
    filePdf: "resources/story-completion.pdf",
    isNew: true
  },
  {
    title: "Emotion Dice",
    category: "Creative therapeutic resources",
    description: "A printable dice template with feelings on each face for game-based emotional check-ins.",
    how: "Roll the dice and share a time you felt that way - works well in groups.",
    fileDocx: "resources/emotion-dice.docx",
    filePdf: "resources/emotion-dice.pdf",
    isNew: true
  },
  {
    title: "Role-Play Scenarios",
    category: "Creative therapeutic resources",
    description: "A set of scenario cards for practising responses through role play.",
    how: "Swap roles so the young person practises both sides of the interaction.",
    fileDocx: "resources/role-play-scenarios.docx",
    filePdf: "resources/role-play-scenarios.pdf",
    isNew: true
  },

  /* ---------- Reward & motivation ---------- */
  {
    title: "Certificates",
    category: "Reward & motivation",
    description: "Printable certificate templates for celebrating effort and achievement.",
    how: "Personalise the wording to the specific effort you're celebrating.",
    fileDocx: "resources/certificates.docx",
    filePdf: "resources/certificates.pdf",
    isNew: true
  },
  {
    title: "Progress Passport",
    category: "Reward & motivation",
    description: "A passport-style booklet for stamping or stickering progress across sessions.",
    how: "Bring it out at the start of every session to build a sense of continuity.",
    fileDocx: "resources/progress-passport.docx",
    filePdf: "resources/progress-passport.pdf",
    isNew: true
  },
  {
    title: "Sticker Chart",
    category: "Reward & motivation",
    description: "A classic sticker chart template for tracking and rewarding target behaviours.",
    how: "Keep the target small and clearly defined so success is achievable.",
    fileDocx: "resources/sticker-chart.docx",
    filePdf: "resources/sticker-chart.pdf",
    isNew: true
  },
  {
    title: "Challenge Cards",
    category: "Reward & motivation",
    description: "A set of small, achievable challenge cards to build confidence through action.",
    how: "Let the young person pick their own challenge rather than assigning one.",
    fileDocx: "resources/challenge-cards.docx",
    filePdf: "resources/challenge-cards.pdf",
    isNew: true
  },
  {
    title: "Reflection Journal",
    category: "Reward & motivation",
    description: "A structured journal for reflecting on progress, wins and challenges over time.",
    how: "Use at the end of a block of sessions to notice how far they've come.",
    fileDocx: "resources/reflection-journal.docx",
    filePdf: "resources/reflection-journal.pdf",
    isNew: true
  },
  {
    title: "Achievement Badges",
    category: "Reward & motivation",
    description: "Printable badge designs for marking specific achievements or milestones.",
    how: "Let badges celebrate effort and small steps, not just big wins.",
    fileDocx: "resources/achievement-badges.docx",
    filePdf: "resources/achievement-badges.pdf",
    isNew: true
  }
];
