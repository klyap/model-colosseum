export const benchmarks = [
  {
    id: "1",
    name: "Customer Service Triage Quality",
    createdByName: "Noah",
    createdAt: "2024-03-01T02:23:53.528Z",
    updatedAt: "2024-03-03T02:21:53.528Z",
    description:
      "This benchmark measures the effectiveness and efficiency of customer service triage systems. It evaluates how well a system can categorize and prioritize customer inquiries, ensuring that the most critical issues are addressed promptly and accurately.",
    bestPrompt:
      "You are AgentBot, a helpful customer service agent bot.\n\nYou are triaging support tickets into 1 of 3 codes according to the following map: {'Escalate': 0, 'Reference FAQ': 1, 'No Support Intent':2}. \nReturn the code only. \n\nFor examples, \nExample 1: [CUSTOMER INPUT]:My inquiry is done [AgentBot]: 2\nExample 2:[CUSTOMERINPUT]:My product is broken when it arrived [AgentBot]: 0\nExample 3:[CUSTOMER INPUT]:I am dont know how to configure this device [AgentBot]: 1\n\nNow please classify this support ticket:\n{{TEXT}}",
    data: [
      {
        input:
          "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. To remove the new {product_purch I've checked for any available software updates for my {product_purchased}, but there are none.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account?\n\nSolution 1 I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          'My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this?\n\n} If we can, please send a "request" to dav The issue I\'m facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.',
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nI can't find the 'Product_IP' field of the I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thank you,\n\nThank you for posting.\n\nIt took me a I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nOn Windows Vista, this is not possible. If you are I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? I need assistance as soon as possible because it's affecting my work and productivity.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? If you know the answer, please let me know.\n\nDo I I've noticed a sudden decrease in battery life on my {product_purchased}. It used to last much longer.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I can reset my password by entering the following: My password still valid: password is expired I've recently updated the firmware of my {product_purchased}, and the issue started happening afterward. Could it be related to the update?",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nThe next step is to resolve this issue if the user is not I've noticed that the issue occurs consistently when I use a specific feature or application on my {product_purchased}.",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\nIf I'd just switched to a The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nThere are several packages that run in memory by default. These I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?.......................................................1. Visit https://forum.ejconop I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? For those who live in the U.S., you can use the {product_ I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. I'm working around this problem by switching off I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "There seems to be a glitch in the {product_purchased} software. It freezes frequently, making it difficult to use. Can you please provide a solution?\n\n\"I'd love to do this on my own. It's a I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue?\n\nA good way to resolve this software issue is to use a custom configuration file The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've accidentally deleted important data from my {product_purchased}. Is there any way to recover the deleted files? I need them urgently. What can I do to recover them?\n\nProduct purchases are never recoverable from the database. I'm worried that the issue might be hardware-related and might require repair or replacement.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? If you don't I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "The {product_purchased} is the I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? I've tried clearing the cache and data for the {product_purchased} app, but the issue persists.",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nIf you have not used login tokens for the previous 12 months, the login token I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? - The password reset option can be enabled by using the {Product_purchased} The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I just wanted to say that I love your products! Keep up the great work.",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I visited your store today and the staff was incredibly friendly and helpful. Thank you!",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I've been using your app for a year now, and it's made my life so much easier. Thanks for creating it!",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I appreciate the eco-friendly packaging of your products. It's great to see a company that cares about the environment",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thanks. :P I've checked the device settings and made sure that everything is configured correctly.",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? The account is temporarily I've tried using different cables, adapters, or peripherals with my {product_purchased}, but the issue persists.",
        output: 0.0,
        source: "upload",
      },
      {
        input: "How long does it usually take for a refund to be processed?",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I'm interested in your subscription service. Where can I find more information about it?",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I received my order, but one item is missing. What should I do?",
        output: 0.0,
        source: "upload",
      },
      {
        input:
          "I'm facing issues logging into my {product_purchased} account. It says my account is locked. What should I do to unlock it?\n\nIf you have any questions or concerns about logging into the site, please don't hesitate I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I have a PIN and password, but it's not yet working. What am I supposed I've followed the troubleshooting steps mentioned in the user manual, but the issue persists.",
        output: 2.0,
        source: "upload",
      },
      {
        input:
          "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nThe following instructions show how to recover the account.\n\nStep 1: Select I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
        output: 1.0,
        source: "upload",
      },
      {
        input:
          "My computer won't turn on when I press the power button. The lights blink for a second and then nothing happens.",
        output: "A: Escalate",
        source: "upload",
      },
      {
        input: "How do I reset my password if I forgot it?",
        output: "B: Auto Reply",
        source: "upload",
      },
      {
        input:
          "Do you sell refurbished models of Phone X? I want to buy one but don't need the latest model.",
        output: "C: No Response",
        source: "upload",
      },
      {
        input:
          "The app is crashing when I try to upload photos. Can you help troubleshoot why it crashes?",
        output: "A: Escalate",
        source: "upload",
      },
      {
        input:
          "I ordered a blue Phone X 3 days ago and my order still says processing. When will it ship?",
        output: "B: Auto Reply",
        source: "upload",
      },
      {
        input:
          "The capacitive home button on Phone Y no longer senses my finger when I touch it.",
        output: "A: Escalate",
        source: "upload",
      },
      {
        input:
          "How do I use the macro mode to take close-up photos on my Phone Z?",
        output: "B: Auto Reply",
        source: "product",
      },
      {
        input: "Do you provide student discounts on laptop purchases?",
        output: "C: No Response",
        source: "product",
      },
      {
        input:
          "There is a crack across the corner of my Phone Q screen. Repair options?",
        output: "A: Escalate",
        source: "product",
      },
      {
        input:
          "I'm thinking of switching from an iPhone. Does the Phone T model sync with iCloud?",
        output: "B: Auto Reply",
        source: "product",
      },
      {
        input:
          "The battery life on my old Phone R is terrible now. Time for an upgrade!",
        output: "C: No Response",
        source: "product",
      },
      {
        input:
          "How do I use the macro mode to take close-up photos on my Phone Z?",
        output: "B: Auto Reply",
        source: "product",
      },
      {
        input: "Do you provide student discounts on laptop purchases?",
        output: "C: No Response",
        source: "product",
      },
      {
        input:
          "There is a crack across the corner of my Phone Q screen. Repair options?",
        output: "A: Escalate",
        source: "product",
      },
      {
        input:
          "I'm thinking of switching from an iPhone. Does the Phone T model sync with iCloud?",
        output: "B: Auto Reply",
        source: "product",
      },
      {
        input:
          "The battery life on my old Phone R is terrible now. Time for an upgrade!",
        output: "C: No Response",
        source: "product",
      },
      {
        input:
          "I can't get the facial recognition feature to work consistently on Phone S.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "Do you sell Phone C models unlocked without a carrier contract?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "My laptop heats up and the fan is constantly running loudly when streaming video.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "Where can I find a user guide for setting up my new wireless printer?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "Will the Tablet B model be refreshed with a faster processor soon?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input:
          "The touchscreen is unresponsive after my toddler spilled milk on my Tablet A.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "I'm having problems connecting my headphones to Bluetooth on my phone.",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "The memory on my old phone is almost full. What are my options?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "How do I screenshot on my Laptop Z?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input: "Do you sell the previous generation Phone X model refurbished?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "I cracked the screen on my Phone W. Repair or replace?",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "My laptop freezes sometimes when I have too many browser tabs open.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input: "Do tablets come with built-in virus protection?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "I spilled coffee on my laptop keyboard and now some keys aren't working.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input: "How to connect my new Tablet B to home WiFi?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "Slow performance and bad battery life! My old laptop can't keep up anymore.",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "I forgot my unlock pattern on my Phone X. Help!",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input: "Looking for the best phone and plan to switch from an iPhone.",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "How can I free up storage space on my Phone Z?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "I'm due for an upgrade, but want to stick with Phone Q models. Advice?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input:
          "I received a cracked screen on my Phone C. What are my options?",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "I can't get the facial recognition feature to work consistently on Phone S.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "Do you sell Phone C models unlocked without a carrier contract?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "My laptop heats up and the fan is constantly running loudly when streaming video.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "Where can I find a user guide for setting up my new wireless printer?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "Will the Tablet B model be refreshed with a faster processor soon?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input:
          "The touchscreen is unresponsive after my toddler spilled milk on my Tablet A.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "I'm having problems connecting my headphones to Bluetooth on my phone.",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "The memory on my old phone is almost full. What are my options?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "How do I screenshot on my Laptop Z?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input: "Do you sell the previous generation Phone X model refurbished?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "I cracked the screen on my Phone W. Repair or replace?",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "My laptop freezes sometimes when I have too many browser tabs open.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input: "Do tablets come with built-in virus protection?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "I spilled coffee on my laptop keyboard and now some keys aren't working.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input: "How to connect my new Tablet B to home WiFi?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "Slow performance and bad battery life! My old laptop can't keep up anymore.",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "I forgot my unlock pattern on my Phone X. Help!",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input: "Looking for the best phone and plan to switch from an iPhone.",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "How can I free up storage space on my Phone Z?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "I'm due for an upgrade, but want to stick with Phone Q models. Advice?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input:
          "I received a cracked screen on my Phone C. What are my options?",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "I can't get the facial recognition feature to work consistently on Phone S.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "Do you sell Phone C models unlocked without a carrier contract?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "My laptop heats up and the fan is constantly running loudly when streaming video.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "Where can I find a user guide for setting up my new wireless printer?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "Will the Tablet B model be refreshed with a faster processor soon?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input:
          "The touchscreen is unresponsive after my toddler spilled milk on my Tablet A.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "I'm having problems connecting my headphones to Bluetooth on my phone.",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "The memory on my old phone is almost full. What are my options?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "How do I screenshot on my Laptop Z?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input: "Do you sell the previous generation Phone X model refurbished?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "I cracked the screen on my Phone W. Repair or replace?",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input:
          "My laptop freezes sometimes when I have too many browser tabs open.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input: "Do tablets come with built-in virus protection?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "I spilled coffee on my laptop keyboard and now some keys aren't working.",
        output: "A: Escalate",
        source: "synthetic",
      },
      {
        input: "How to connect my new Tablet B to home WiFi?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "Slow performance and bad battery life! My old laptop can't keep up anymore.",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "I forgot my unlock pattern on my Phone X. Help!",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input: "Looking for the best phone and plan to switch from an iPhone.",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input: "How can I free up storage space on my Phone Z?",
        output: "B: Auto Reply",
        source: "synthetic",
      },
      {
        input:
          "I'm due for an upgrade, but want to stick with Phone Q models. Advice?",
        output: "C: No Response",
        source: "synthetic",
      },
      {
        input:
          "I received a cracked screen on my Phone C. What are my options?",
        output: "A: Escalate",
        source: "synthetic",
      },
    ],
  },
  {
    id: "2",
    name: "Great Benchmark",
    createdByName: "Noah",
    createdAt: "2024-03-02T02:23:53.528Z",
    updatedAt: "2024-03-02T02:21:53.528Z",
    description:
      "This benchmark measures the effectiveness and efficiency of customer service triage systems. It evaluates how well a system can categorize and prioritize customer inquiries, ensuring that the most critical issues are addressed promptly and accurately.",
    data: [
      {
        input:
          "My computer won't turn on when I press the power button. The lights blink for a second and then nothing happens.",
        output: "A: Escalate",
        source: "upload",
      },
      {
        input: "How do I reset my password if I forgot it?",
        output: "B: Auto Reply",
        source: "upload",
      },
      {
        input:
          "Do you sell refurbished models of Phone X? I want to buy one but don't need the latest model.",
        output: "C: No Response",
        source: "upload",
      },
    ],
  },
];
