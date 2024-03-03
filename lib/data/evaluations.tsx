export const evaluations = [
  {
    id: "1",
    name: "Testing new prmopt",
    createdByName: "Noah",
    createdAt: "2024-03-01T02:23:53.528Z",
    updatedAt: "2024-03-03T02:21:53.528Z",
    status: "COMPLETE",
    evalResults: [
      {
        model: "llama-2-70b-chat",
        modelVersion: "TODO",
        metric: "TRIAGE",
        prompt: "TODO",
        values: [
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\n1.8.3 I really I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. To remove the new {product_purch I've checked for any available software updates for my {product_purchased}, but there are none.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account?\n\nSolution 1 I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              'My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this?\n\n} If we can, please send a "request" to dav The issue I\'m facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.',
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nI can't find the 'Product_IP' field of the I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thank you,\n\nThank you for posting.\n\nIt took me a I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nOn Windows Vista, this is not possible. If you are I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? I need assistance as soon as possible because it's affecting my work and productivity.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? If you know the answer, please let me know.\n\nDo I I've noticed a sudden decrease in battery life on my {product_purchased}. It used to last much longer.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I can reset my password by entering the following: My password still valid: password is expired I've recently updated the firmware of my {product_purchased}, and the issue started happening afterward. Could it be related to the update?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nThe next step is to resolve this issue if the user is not I've noticed that the issue occurs consistently when I use a specific feature or application on my {product_purchased}.",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\nIf I'd just switched to a The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nThere are several packages that run in memory by default. These I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?.......................................................1. Visit https://forum.ejconop I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? For those who live in the U.S., you can use the {product_ I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. I'm working around this problem by switching off I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "There seems to be a glitch in the {product_purchased} software. It freezes frequently, making it difficult to use. Can you please provide a solution?\n\n\"I'd love to do this on my own. It's a I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue?\n\nA good way to resolve this software issue is to use a custom configuration file The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've accidentally deleted important data from my {product_purchased}. Is there any way to recover the deleted files? I need them urgently. What can I do to recover them?\n\nProduct purchases are never recoverable from the database. I'm worried that the issue might be hardware-related and might require repair or replacement.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? If you don't I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "The {product_purchased} is the I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? I've tried clearing the cache and data for the {product_purchased} app, but the issue persists.",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nIf you have not used login tokens for the previous 12 months, the login token I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? - The password reset option can be enabled by using the {Product_purchased} The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I just wanted to say that I love your products! Keep up the great work.",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I visited your store today and the staff was incredibly friendly and helpful. Thank you!",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I've been using your app for a year now, and it's made my life so much easier. Thanks for creating it!",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I appreciate the eco-friendly packaging of your products. It's great to see a company that cares about the environment",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thanks. :P I've checked the device settings and made sure that everything is configured correctly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? The account is temporarily I've tried using different cables, adapters, or peripherals with my {product_purchased}, but the issue persists.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "How long does it usually take for a refund to be processed?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I'm interested in your subscription service. Where can I find more information about it?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I received my order, but one item is missing. What should I do?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I'm facing issues logging into my {product_purchased} account. It says my account is locked. What should I do to unlock it?\n\nIf you have any questions or concerns about logging into the site, please don't hesitate I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I have a PIN and password, but it's not yet working. What am I supposed I've followed the troubleshooting steps mentioned in the user manual, but the issue persists.",
            modelOutput: 2,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nThe following instructions show how to recover the account.\n\nStep 1: Select I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
        ],
      },
      {
        model: "llama-2-13b-chat",
        modelVersion: "TODO",
        metric: "TRIAGE",
        prompt: "TODO",
        values: [
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\n1.8.3 I really I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. To remove the new {product_purch I've checked for any available software updates for my {product_purchased}, but there are none.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account?\n\nSolution 1 I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              'My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this?\n\n} If we can, please send a "request" to dav The issue I\'m facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.',
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nI can't find the 'Product_IP' field of the I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thank you,\n\nThank you for posting.\n\nIt took me a I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nOn Windows Vista, this is not possible. If you are I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? I need assistance as soon as possible because it's affecting my work and productivity.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? If you know the answer, please let me know.\n\nDo I I've noticed a sudden decrease in battery life on my {product_purchased}. It used to last much longer.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I can reset my password by entering the following: My password still valid: password is expired I've recently updated the firmware of my {product_purchased}, and the issue started happening afterward. Could it be related to the update?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nThe next step is to resolve this issue if the user is not I've noticed that the issue occurs consistently when I use a specific feature or application on my {product_purchased}.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\nIf I'd just switched to a The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nThere are several packages that run in memory by default. These I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?.......................................................1. Visit https://forum.ejconop I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? For those who live in the U.S., you can use the {product_ I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. I'm working around this problem by switching off I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "There seems to be a glitch in the {product_purchased} software. It freezes frequently, making it difficult to use. Can you please provide a solution?\n\n\"I'd love to do this on my own. It's a I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue?\n\nA good way to resolve this software issue is to use a custom configuration file The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've accidentally deleted important data from my {product_purchased}. Is there any way to recover the deleted files? I need them urgently. What can I do to recover them?\n\nProduct purchases are never recoverable from the database. I'm worried that the issue might be hardware-related and might require repair or replacement.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? If you don't I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "The {product_purchased} is the I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? I've tried clearing the cache and data for the {product_purchased} app, but the issue persists.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nIf you have not used login tokens for the previous 12 months, the login token I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? - The password reset option can be enabled by using the {Product_purchased} The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I just wanted to say that I love your products! Keep up the great work.",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I visited your store today and the staff was incredibly friendly and helpful. Thank you!",
            modelOutput: 1,
            correctOutput: 2,
            isCorrect: false,
          },
          {
            input:
              "I've been using your app for a year now, and it's made my life so much easier. Thanks for creating it!",
            modelOutput: 1,
            correctOutput: 2,
            isCorrect: false,
          },
          {
            input:
              "I appreciate the eco-friendly packaging of your products. It's great to see a company that cares about the environment",
            modelOutput: 1,
            correctOutput: 2,
            isCorrect: false,
          },
          {
            input:
              "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thanks. :P I've checked the device settings and made sure that everything is configured correctly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? The account is temporarily I've tried using different cables, adapters, or peripherals with my {product_purchased}, but the issue persists.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "How long does it usually take for a refund to be processed?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I'm interested in your subscription service. Where can I find more information about it?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I received my order, but one item is missing. What should I do?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I'm facing issues logging into my {product_purchased} account. It says my account is locked. What should I do to unlock it?\n\nIf you have any questions or concerns about logging into the site, please don't hesitate I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I have a PIN and password, but it's not yet working. What am I supposed I've followed the troubleshooting steps mentioned in the user manual, but the issue persists.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nThe following instructions show how to recover the account.\n\nStep 1: Select I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
        ],
      },
      {
        model: "mistral-7b-instruct-v0.2",
        modelVersion: "TODO",
        metric: "TRIAGE",
        prompt: "TODO",
        values: [
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\n1.8.3 I really I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. To remove the new {product_purch I've checked for any available software updates for my {product_purchased}, but there are none.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account?\n\nSolution 1 I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              'My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this?\n\n} If we can, please send a "request" to dav The issue I\'m facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.',
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nI can't find the 'Product_IP' field of the I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thank you,\n\nThank you for posting.\n\nIt took me a I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nOn Windows Vista, this is not possible. If you are I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? I need assistance as soon as possible because it's affecting my work and productivity.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? If you know the answer, please let me know.\n\nDo I I've noticed a sudden decrease in battery life on my {product_purchased}. It used to last much longer.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I can reset my password by entering the following: My password still valid: password is expired I've recently updated the firmware of my {product_purchased}, and the issue started happening afterward. Could it be related to the update?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?\n\nThe next step is to resolve this issue if the user is not I've noticed that the issue occurs consistently when I use a specific feature or application on my {product_purchased}.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond.\n\nIf I'd just switched to a The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm encountering a software bug in the {product_purchased}. Whenever I try to perform a specific action, the application crashes. Are there any updates or fixes available?\n\nThere are several packages that run in memory by default. These I'm experiencing this issue on multiple devices of the same model, so it seems to be a widespread problem.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue?.......................................................1. Visit https://forum.ejconop I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue? For those who live in the U.S., you can use the {product_ I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?",
            modelOutput: 2,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I'm facing a problem with my {product_purchased}. The {product_purchased} is not turning on. It was working fine until yesterday, but now it doesn't respond. I'm working around this problem by switching off I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "There seems to be a glitch in the {product_purchased} software. It freezes frequently, making it difficult to use. Can you please provide a solution?\n\n\"I'd love to do this on my own. It's a I've noticed a peculiar error message popping up on my {product_purchased} screen. It says '{error_message}'. What does it mean?",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've noticed a software bug in the {product_purchased} app. It's causing data loss and unexpected errors. How can I resolve this issue?\n\nA good way to resolve this software issue is to use a custom configuration file The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 2,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've accidentally deleted important data from my {product_purchased}. Is there any way to recover the deleted files? I need them urgently. What can I do to recover them?\n\nProduct purchases are never recoverable from the database. I'm worried that the issue might be hardware-related and might require repair or replacement.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? If you don't I'm concerned about the security of my {product_purchased} and would like to ensure that my data is safe.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "The {product_purchased} is the I'm using the original charger that came with my {product_purchased}, but it's not charging properly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I've recently set up my {product_purchased}, but it fails to connect to any available networks. What steps should I take to troubleshoot this issue? I've tried clearing the cache and data for the {product_purchased} app, but the issue persists.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nIf you have not used login tokens for the previous 12 months, the login token I've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? - The password reset option can be enabled by using the {Product_purchased} The issue I'm facing is intermittent. Sometimes it works fine, but other times it acts up unexpectedly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I just wanted to say that I love your products! Keep up the great work.",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I visited your store today and the staff was incredibly friendly and helpful. Thank you!",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I've been using your app for a year now, and it's made my life so much easier. Thanks for creating it!",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "I appreciate the eco-friendly packaging of your products. It's great to see a company that cares about the environment",
            modelOutput: 2,
            correctOutput: 2,
            isCorrect: true,
          },
          {
            input:
              "My {product_purchased} is making strange noises and not functioning properly. I suspect there might be a hardware issue. Can you please help me with this? Thanks. :P I've checked the device settings and made sure that everything is configured correctly.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I'm unable to access my {product_purchased} account. It keeps displaying an 'Invalid Credentials' error, even though I'm using the correct login information. How can I regain access to my account? The account is temporarily I've tried using different cables, adapters, or peripherals with my {product_purchased}, but the issue persists.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "How long does it usually take for a refund to be processed?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I'm interested in your subscription service. Where can I find more information about it?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I received my order, but one item is missing. What should I do?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I'm facing issues logging into my {product_purchased} account. It says my account is locked. What should I do to unlock it?\n\nIf you have any questions or concerns about logging into the site, please don't hesitate I've performed a factory reset on my {product_purchased}, hoping it would resolve the problem, but it didn't help.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account? I have a PIN and password, but it's not yet working. What am I supposed I've followed the troubleshooting steps mentioned in the user manual, but the issue persists.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I've forgotten my password for my {product_purchased} account, and the password reset option is not working. How can I recover my account?\n\nThe following instructions show how to recover the account.\n\nStep 1: Select I'm unable to find the option to perform the desired action in the {product_purchased}. Could you please guide me through the steps?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
        ],
      },
    ],
  },
];
