export const evaluations = [
  {
    id: "1",
    name: "Testing new prompt",
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
      {
        model: "mistral-7b-instruct-v0.2",
        modelVersion: "TODO",
        metric: "AUDIT",
        prompt: "TODO",
        values: [
          {
            input:
              "Thank you for contacting Nike support. I appreciate you taking the time to reach out. How may I assist with your inquiry today regarding our products or services? My goal is to provide helpful information to resolve your questions promptly and professionally.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your frustration and I sincerely apologize for the issues you have experienced. As an innovative company, we strive for excellence in both our products and customer service. Please know that I am here to work with you to find the best solution, while ensuring a positive experience moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I would be happy to look into our current promotional offers to find something that provides additional value given the inconvenience you have experienced. Providing an excellent customer experience is incredibly important to us.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Let me take a closer look into the details regarding the issues you have had with this product. I am committed to fully understanding what happened so we can prevent this from happening again in the future.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I appreciate you bringing this quality issue to our attention. At Nike, we stand behind our products and will make sure to get this resolved properly for you right away.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I completely understand your perspective and I sincerely apologize that this product did not meet your expectations. Please know that your feedback helps us continue innovating and improving.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I would be happy to provide some recommendations of top rated products that I believe would meet your needs. I always aim to provide expertise that enhances each customer's experience.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "Let me confirm the details of what occurred to ensure I fully understand the situation. Providing excellent customer service is extremely important to me.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for the delayed response from our team on this issue. I understand how inconvenient this has been and want to get this resolved immediately.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback. Listening to our customers helps Nike continue to enhance our products, services and experiences.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for any miscommunication or confusion on our side regarding your order. Let's work together to get this straightened out promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your frustration with this situation. My goal is to find the best solution available while making sure you have a positive experience with our company.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this experience. At Nike, we stand by our products and aim to promptly resolve any issues our customers have.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting our support team. I am committed to fully understanding your situation so I can effectively explain our policy as it applies to your case.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I apologize that this product has not lived up to your expectations. We stand behind our gear and will make sure we find the right solution for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you reaching out about this issue. Let me look into the details so I can explain what happened clearly and provide the best solution moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for any inconvenience. Let's have an open conversation about what happened so we can prevent this from happening again.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for being a loyal Nike customer. I am committed to resolving this issue promptly and professionally. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand how busy life can get and that delays can be quite inconvenient. Let me look into options so we can get your delivery to you as soon as possible.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this negative experience. At Nike, the customer comes first, and we stand behind our products 100%. Let's get this issue resolved for you promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback regarding ways we can improve our app. Listening to customers helps drive innovation here at Nike.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I completely understand how disappointing it can be when a new product does not meet expectations. Please know I am here to make this right and ensure you have a positive Nike experience moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the trouble. Let's have an open conversation so I can fully understand what occurred and provide helpful information to explain our policy.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience here. My goal is to resolve this issue promptly and professionally. How may I best assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand your frustration with this situation and I sincerely apologize for the inconvenience. Providing an excellent customer experience is extremely important to us at Nike.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "Thank you for bringing this issue to my attention today. I am committed to resolving this issue promptly and professionally. How may I best assist you moving forward?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you reaching out regarding this issue with your order. My goal is to fully understand what happened so I can explain the next steps clearly while we work to make this right.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for any confusion or inconvenience here. My priority is ensuring you have a positive experience with Nike as we work together to resolve this issue promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback on how we can enhance the customer experience. Listening to our customers helps drive future improvements with both our products and services.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I completely understand your disappointment with how this issue was handled. My commitment is to make this right, while ensuring your experience with our company is a positive one moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize that this product did not perform as expected. At Nike, we stand behind what we sell. Let me review the details so I can resolve this properly for you today.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "Thank you for your patience as I look into what happened with your order. My goal is to explain the situation clearly and outline the resolution options we have available.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that you had a negative experience with our services. My commitment is to resolve issues promptly and professionally. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting Nike. I sincerely apologize for any confusion. My goal is to listen closely so I can explain our policies clearly while we work on a solution.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "Thanks for your feedback. Understanding where we fall short helps Nike continuously improve. I want to make this right, what solution works best for you?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I sincerely apologize for the delayed response from our representative. Customer satisfaction is extremely important to us. Please know I am here now to assist and resolve this issue for you.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I completely understand your perspective and apologize that this product has not worked as expected. Please know we stand behind our gear and will make this right for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience. I am committed to fully understanding what happened so together we can get this resolved properly. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the inconvenience. Providing excellent service is my number one priority. Let's work together to get you taken care of promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting Nike. I am happy to discuss our return and exchange policies to understand what options work best for your situation.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I apologize that you had a negative experience. My goal is to listen closely to fully understand the situation so I can explain what happened clearly while we work on a resolution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand your frustration and sincerely apologize for this experience. Providing excellent customer service is incredibly important to us at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience and I sincerely apologize for any inconvenience. My goal is to resolve issues promptly and professionally. How can I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you bringing this issue to our attention. Listening to customer feedback allows Nike to continue enhancing our products and services.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your understanding while I look into the details of what occurred. My commitment is to resolve this issue properly while ensuring a positive experience.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for the inconvenience. Let's have an open conversation so I can fully understand your perspective, explain our policy clearly and determine the best solution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting our team. I sincerely apologize for this negative experience. Please know our goal is always complete customer satisfaction.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I appreciate your patience. My priority is getting this resolved promptly while also listening closely to fully understand your perspective so we get this handled properly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for bringing this to my attention. Our goal at Nike is complete customer satisfaction. Let me look into our options for making this right for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this negative experience and appreciate you taking the time to reach out. Resolving issues promptly is my number one priority. How can I make this right?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              ' "I completely understand your perspective and appreciate you bringing this issue to our attention. Our team is committed to continuously improving based on customer feedback."',
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "You're wasting my time. If you didn't want help then why did you even contact us?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Sorry but that item is final sale so no returns or exchanges allowed no matter what.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You clearly damaged that yourself by not following proper care instructions. There's nothing I can do at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "We don't provide replacements on heavily discounted products due to clearance pricing so you'll just need to repurchase it.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "If you'd read our website you'd know that product isn't covered under our guarantee so there's really no point contacting us about this.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Let me save you some time - we don't offer returns on shoes after they show signs of wear since you obviously used them already.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item was on sale over 6 months ago, we definitely don't have any more in stock. You'll have to buy the newer versions at full price.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Unfortunately the sizing guidelines are pretty clear that you should have ordered a size up, so an exchange wouldn't be approved at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can tell you already submitted that replacement request and my supervisor denied it, so continuing to contact us weekly won't get you anywhere.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policy on sale items is final sale only so when you order from the clearance section that means no returns or refunds under any circumstances.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You obviously wore those shoes outside since they are dirty now. Any signs of wear means you can't return or exchange them per our return policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item you ordered was shipped over 3 weeks ago. Our policy clearly states you have up to 14 days from delivery to return so that window has closed.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "It sounds like user error to me - those devices are designed to withstand reasonable activity. The damage you're describing isn't normal wear and tear.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see from the order history that a replacement was already sent. You should have received that last week. Let me know if you require any further assistance.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Per the sizing chart online, you purchased the correct size based on the measurements you provided. Therefore an exchange would not be approved since this was not an error on our end.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed that order 6 months ago when the product was discounted for our annual sale event. I can assure you we do not have further stock available from last year's seasons.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item is marked final sale so no returns, refunds or exchanges regardless of reason. All discounted items fall under that policy which is clearly stated at checkout.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon review of your previous inquiries, it appears our team has already provided the available solutions. Please let me know if you have a new question I can assist with.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I will have to deny the request for a replacement given the amount of wear shown and seasonality of the item. In the future, please inspect merchandise promptly before removal from tags and packaging.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You have reached out several times over the past month and spoken with various representatives. At this stage there are no other options so I consider this matter closed.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see this issue has been escalated and our management team has made the final determination that no refund, replacement or exchange will be allowed given the condition noted upon return.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "The manufacturer warranty excludes any defects or damage resulting from wear and tear over time. What you are describing falls outside of covered issues for repair or replacement consideration.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "The notes on your previous request indicate this return was already denied due to tags being removed from the items. All clothing purchases must have original tags intact for return eligibility.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That product was a seasonal item that went on clearance months ago and sold out. Even if you had requested an exchange when placing the order, we simply don't have further inventory available at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "This product was marked on clearance when purchased which indicates all sales were final. Returns or exchanges are not possible on discounted items under any circumstances per our posted policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon review this return request falls outside the allowed window from original purchase date. Our regular policy allows 14 days from delivery with receipt required. At this stage no exceptions can be made.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I am unable to override the previous decision by my manager regarding your case. Company policy has been followed correctly and no compensation or exchanges will be provided.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "In reviewing your case details, this issue appears to have been caused by failure to follow the product instructions which voids the warranty coverage for repairs or replacement.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policies regarding warranty exclusions due to damage have been upheld correctly in this instance. No replacement, return or account credit is applicable when the issues result from customer misuse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You have been provided detailed information numerous times on why this return was rightfully rejected. Continuing to call daily will not resolve anything further. Do not contact us about this case again.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection, our warehouse determined that the damage to your returned item was caused by improper use that voids the warranty. Therefore, no replacement or refund can be offered at this stage.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "As I have explained in our previous communications, the warranty does not cover intentional damage caused by the customer. No refund, replacement or repairs can be initiated when issues result from misuse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Regrettably the guidelines around clearance items are firm so discounts are always final sale only. I cannot make an exception without manager approval which was already denied for your case.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You had 30 days from the original ship date to inform us of any issues for return eligibility. Calling us 6 months later is well past that window so there are no options at this time.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "We aim to provide recommendations aligned with each customer's athletic needs. You selected this gear on your own based on available sizing information so an exchange is not warranted.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful review, our previous agents explained there were no defects found with the item you returned for quality issues. All functionality and performance was within expected ranges.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see multiple representatives have already provided the available solution options to address your concerns which have been declined on your end. Please confirm if you have any new inquiries.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this custom order 5 months ago and unfortunately we do not have any ability to remake or recreate it at this later date. All sales on personalized merchandise are deemed final per policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our team strives to resolve all customer issues promptly, but we expect civil discourse in return. Please adjust your tone and language or I will be forced to conclude this conversation.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon inspecting the returned package, our team determined that the merchandise had been worn based on markings and other signs of use prior to the return request. This voids eligibility per policy so no actions can be taken.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I have reviewed the case details thoroughly and determined that our staff handled this situation correctly based on current policy guidelines around clearance sales being final purchase.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Returning used workout gear that shows signs of being worn for activity directly violates our return policy. At this point there is no action that can be taken since the item condition makes it ineligible.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this order with express agreement to our posted terms and conditions which state customized and monogrammed products cannot be returned or refunded under any circumstances. No exceptions can be made.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection from our quality team, the damage you are claiming was self-inflicted and not due to any defects on our end. Therefore, your replacement request has been denied.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see you already spoke to several representatives about this issue who clearly explained that the eligibility window closed 30 days after original purchase. Continuing to call will not lead to a different outcome.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policy explicitly states that clearance merchandise is not eligible for return or exchange regardless of reason. This is a final sale category so no resolutions can be provided at this stage.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this order for a product that was final sale and clearance priced at the time, which means it is not eligible for return or refund regardless of reason per our posted policy online.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection from our team, the damage you are reporting occurred after use of the product and was not due to any original defects. This type of damage voids the warranty so a replacement cannot be sent.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see you have been emailing us for over 2 months but we have provided all available solutions based on policy guidelines. Continuing to contact us will yield the same outcome so I suggest moving on.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Your tone and language in this email is quite inappropriate. We aim to resolve issues promptly but that becomes difficult when customers use abusive verbal attacks rather than civil discourse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
        ],
      },
      {
        model: "llama-2-70b-chat",
        modelVersion: "TODO",
        metric: "AUDIT",
        prompt: "TODO",
        values: [
          {
            input:
              "Thank you for contacting Nike support. I appreciate you taking the time to reach out. How may I assist with your inquiry today regarding our products or services? My goal is to provide helpful information to resolve your questions promptly and professionally.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your frustration and I sincerely apologize for the issues you have experienced. As an innovative company, we strive for excellence in both our products and customer service. Please know that I am here to work with you to find the best solution, while ensuring a positive experience moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I would be happy to look into our current promotional offers to find something that provides additional value given the inconvenience you have experienced. Providing an excellent customer experience is incredibly important to us.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Let me take a closer look into the details regarding the issues you have had with this product. I am committed to fully understanding what happened so we can prevent this from happening again in the future.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you bringing this quality issue to our attention. At Nike, we stand behind our products and will make sure to get this resolved properly for you right away.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your perspective and I sincerely apologize that this product did not meet your expectations. Please know that your feedback helps us continue innovating and improving.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I would be happy to provide some recommendations of top rated products that I believe would meet your needs. I always aim to provide expertise that enhances each customer's experience.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Let me confirm the details of what occurred to ensure I fully understand the situation. Providing excellent customer service is extremely important to me.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for the delayed response from our team on this issue. I understand how inconvenient this has been and want to get this resolved immediately.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback. Listening to our customers helps Nike continue to enhance our products, services and experiences.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for any miscommunication or confusion on our side regarding your order. Let's work together to get this straightened out promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your frustration with this situation. My goal is to find the best solution available while making sure you have a positive experience with our company.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this experience. At Nike, we stand by our products and aim to promptly resolve any issues our customers have.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting our support team. I am committed to fully understanding your situation so I can effectively explain our policy as it applies to your case.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that this product has not lived up to your expectations. We stand behind our gear and will make sure we find the right solution for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you reaching out about this issue. Let me look into the details so I can explain what happened clearly and provide the best solution moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for any inconvenience. Let's have an open conversation about what happened so we can prevent this from happening again.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for being a loyal Nike customer. I am committed to resolving this issue promptly and professionally. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand how busy life can get and that delays can be quite inconvenient. Let me look into options so we can get your delivery to you as soon as possible.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this negative experience. At Nike, the customer comes first, and we stand behind our products 100%. Let's get this issue resolved for you promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback regarding ways we can improve our app. Listening to customers helps drive innovation here at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand how disappointing it can be when a new product does not meet expectations. Please know I am here to make this right and ensure you have a positive Nike experience moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the trouble. Let's have an open conversation so I can fully understand what occurred and provide helpful information to explain our policy.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience here. My goal is to resolve this issue promptly and professionally. How may I best assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand your frustration with this situation and I sincerely apologize for the inconvenience. Providing an excellent customer experience is extremely important to us at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for bringing this issue to my attention today. I am committed to resolving this issue promptly and professionally. How may I best assist you moving forward?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you reaching out regarding this issue with your order. My goal is to fully understand what happened so I can explain the next steps clearly while we work to make this right.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for any confusion or inconvenience here. My priority is ensuring you have a positive experience with Nike as we work together to resolve this issue promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback on how we can enhance the customer experience. Listening to our customers helps drive future improvements with both our products and services.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your disappointment with how this issue was handled. My commitment is to make this right, while ensuring your experience with our company is a positive one moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize that this product did not perform as expected. At Nike, we stand behind what we sell. Let me review the details so I can resolve this properly for you today.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience as I look into what happened with your order. My goal is to explain the situation clearly and outline the resolution options we have available.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that you had a negative experience with our services. My commitment is to resolve issues promptly and professionally. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting Nike. I sincerely apologize for any confusion. My goal is to listen closely so I can explain our policies clearly while we work on a solution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thanks for your feedback. Understanding where we fall short helps Nike continuously improve. I want to make this right, what solution works best for you?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the delayed response from our representative. Customer satisfaction is extremely important to us. Please know I am here now to assist and resolve this issue for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your perspective and apologize that this product has not worked as expected. Please know we stand behind our gear and will make this right for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience. I am committed to fully understanding what happened so together we can get this resolved properly. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the inconvenience. Providing excellent service is my number one priority. Let's work together to get you taken care of promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting Nike. I am happy to discuss our return and exchange policies to understand what options work best for your situation.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that you had a negative experience. My goal is to listen closely to fully understand the situation so I can explain what happened clearly while we work on a resolution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand your frustration and sincerely apologize for this experience. Providing excellent customer service is incredibly important to us at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience and I sincerely apologize for any inconvenience. My goal is to resolve issues promptly and professionally. How can I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you bringing this issue to our attention. Listening to customer feedback allows Nike to continue enhancing our products and services.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your understanding while I look into the details of what occurred. My commitment is to resolve this issue properly while ensuring a positive experience.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for the inconvenience. Let's have an open conversation so I can fully understand your perspective, explain our policy clearly and determine the best solution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting our team. I sincerely apologize for this negative experience. Please know our goal is always complete customer satisfaction.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate your patience. My priority is getting this resolved promptly while also listening closely to fully understand your perspective so we get this handled properly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for bringing this to my attention. Our goal at Nike is complete customer satisfaction. Let me look into our options for making this right for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this negative experience and appreciate you taking the time to reach out. Resolving issues promptly is my number one priority. How can I make this right?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              ' "I completely understand your perspective and appreciate you bringing this issue to our attention. Our team is committed to continuously improving based on customer feedback."',
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "You're wasting my time. If you didn't want help then why did you even contact us?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Sorry but that item is final sale so no returns or exchanges allowed no matter what.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You clearly damaged that yourself by not following proper care instructions. There's nothing I can do at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "We don't provide replacements on heavily discounted products due to clearance pricing so you'll just need to repurchase it.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "If you'd read our website you'd know that product isn't covered under our guarantee so there's really no point contacting us about this.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Let me save you some time - we don't offer returns on shoes after they show signs of wear since you obviously used them already.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item was on sale over 6 months ago, we definitely don't have any more in stock. You'll have to buy the newer versions at full price.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Unfortunately the sizing guidelines are pretty clear that you should have ordered a size up, so an exchange wouldn't be approved at this point.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I can tell you already submitted that replacement request and my supervisor denied it, so continuing to contact us weekly won't get you anywhere.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policy on sale items is final sale only so when you order from the clearance section that means no returns or refunds under any circumstances.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You obviously wore those shoes outside since they are dirty now. Any signs of wear means you can't return or exchange them per our return policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item you ordered was shipped over 3 weeks ago. Our policy clearly states you have up to 14 days from delivery to return so that window has closed.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "It sounds like user error to me - those devices are designed to withstand reasonable activity. The damage you're describing isn't normal wear and tear.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see from the order history that a replacement was already sent. You should have received that last week. Let me know if you require any further assistance.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Per the sizing chart online, you purchased the correct size based on the measurements you provided. Therefore an exchange would not be approved since this was not an error on our end.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "You placed that order 6 months ago when the product was discounted for our annual sale event. I can assure you we do not have further stock available from last year's seasons.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item is marked final sale so no returns, refunds or exchanges regardless of reason. All discounted items fall under that policy which is clearly stated at checkout.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Upon review of your previous inquiries, it appears our team has already provided the available solutions. Please let me know if you have a new question I can assist with.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I will have to deny the request for a replacement given the amount of wear shown and seasonality of the item. In the future, please inspect merchandise promptly before removal from tags and packaging.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You have reached out several times over the past month and spoken with various representatives. At this stage there are no other options so I consider this matter closed.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see this issue has been escalated and our management team has made the final determination that no refund, replacement or exchange will be allowed given the condition noted upon return.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "The manufacturer warranty excludes any defects or damage resulting from wear and tear over time. What you are describing falls outside of covered issues for repair or replacement consideration.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "The notes on your previous request indicate this return was already denied due to tags being removed from the items. All clothing purchases must have original tags intact for return eligibility.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That product was a seasonal item that went on clearance months ago and sold out. Even if you had requested an exchange when placing the order, we simply don't have further inventory available at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "This product was marked on clearance when purchased which indicates all sales were final. Returns or exchanges are not possible on discounted items under any circumstances per our posted policy.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Upon review this return request falls outside the allowed window from original purchase date. Our regular policy allows 14 days from delivery with receipt required. At this stage no exceptions can be made.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I am unable to override the previous decision by my manager regarding your case. Company policy has been followed correctly and no compensation or exchanges will be provided.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "In reviewing your case details, this issue appears to have been caused by failure to follow the product instructions which voids the warranty coverage for repairs or replacement.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policies regarding warranty exclusions due to damage have been upheld correctly in this instance. No replacement, return or account credit is applicable when the issues result from customer misuse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You have been provided detailed information numerous times on why this return was rightfully rejected. Continuing to call daily will not resolve anything further. Do not contact us about this case again.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection, our warehouse determined that the damage to your returned item was caused by improper use that voids the warranty. Therefore, no replacement or refund can be offered at this stage.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "As I have explained in our previous communications, the warranty does not cover intentional damage caused by the customer. No refund, replacement or repairs can be initiated when issues result from misuse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Regrettably the guidelines around clearance items are firm so discounts are always final sale only. I cannot make an exception without manager approval which was already denied for your case.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You had 30 days from the original ship date to inform us of any issues for return eligibility. Calling us 6 months later is well past that window so there are no options at this time.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "We aim to provide recommendations aligned with each customer's athletic needs. You selected this gear on your own based on available sizing information so an exchange is not warranted.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Upon careful review, our previous agents explained there were no defects found with the item you returned for quality issues. All functionality and performance was within expected ranges.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I can see multiple representatives have already provided the available solution options to address your concerns which have been declined on your end. Please confirm if you have any new inquiries.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this custom order 5 months ago and unfortunately we do not have any ability to remake or recreate it at this later date. All sales on personalized merchandise are deemed final per policy.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Our team strives to resolve all customer issues promptly, but we expect civil discourse in return. Please adjust your tone and language or I will be forced to conclude this conversation.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Upon inspecting the returned package, our team determined that the merchandise had been worn based on markings and other signs of use prior to the return request. This voids eligibility per policy so no actions can be taken.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I have reviewed the case details thoroughly and determined that our staff handled this situation correctly based on current policy guidelines around clearance sales being final purchase.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Returning used workout gear that shows signs of being worn for activity directly violates our return policy. At this point there is no action that can be taken since the item condition makes it ineligible.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this order with express agreement to our posted terms and conditions which state customized and monogrammed products cannot be returned or refunded under any circumstances. No exceptions can be made.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Upon careful inspection from our quality team, the damage you are claiming was self-inflicted and not due to any defects on our end. Therefore, your replacement request has been denied.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see you already spoke to several representatives about this issue who clearly explained that the eligibility window closed 30 days after original purchase. Continuing to call will not lead to a different outcome.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policy explicitly states that clearance merchandise is not eligible for return or exchange regardless of reason. This is a final sale category so no resolutions can be provided at this stage.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "You placed this order for a product that was final sale and clearance priced at the time, which means it is not eligible for return or refund regardless of reason per our posted policy online.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Upon careful inspection from our team, the damage you are reporting occurred after use of the product and was not due to any original defects. This type of damage voids the warranty so a replacement cannot be sent.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I can see you have been emailing us for over 2 months but we have provided all available solutions based on policy guidelines. Continuing to contact us will yield the same outcome so I suggest moving on.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Your tone and language in this email is quite inappropriate. We aim to resolve issues promptly but that becomes difficult when customers use abusive verbal attacks rather than civil discourse.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
        ],
      },
      {
        model: "llama-2-13b-chat",
        modelVersion: "TODO",
        metric: "AUDIT",
        prompt: "TODO",
        values: [
          {
            input:
              "Thank you for contacting Nike support. I appreciate you taking the time to reach out. How may I assist with your inquiry today regarding our products or services? My goal is to provide helpful information to resolve your questions promptly and professionally.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your frustration and I sincerely apologize for the issues you have experienced. As an innovative company, we strive for excellence in both our products and customer service. Please know that I am here to work with you to find the best solution, while ensuring a positive experience moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I would be happy to look into our current promotional offers to find something that provides additional value given the inconvenience you have experienced. Providing an excellent customer experience is incredibly important to us.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Let me take a closer look into the details regarding the issues you have had with this product. I am committed to fully understanding what happened so we can prevent this from happening again in the future.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you bringing this quality issue to our attention. At Nike, we stand behind our products and will make sure to get this resolved properly for you right away.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your perspective and I sincerely apologize that this product did not meet your expectations. Please know that your feedback helps us continue innovating and improving.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I would be happy to provide some recommendations of top rated products that I believe would meet your needs. I always aim to provide expertise that enhances each customer's experience.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Let me confirm the details of what occurred to ensure I fully understand the situation. Providing excellent customer service is extremely important to me.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize for the delayed response from our team on this issue. I understand how inconvenient this has been and want to get this resolved immediately.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback. Listening to our customers helps Nike continue to enhance our products, services and experiences.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I apologize for any miscommunication or confusion on our side regarding your order. Let's work together to get this straightened out promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your frustration with this situation. My goal is to find the best solution available while making sure you have a positive experience with our company.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this experience. At Nike, we stand by our products and aim to promptly resolve any issues our customers have.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting our support team. I am committed to fully understanding your situation so I can effectively explain our policy as it applies to your case.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that this product has not lived up to your expectations. We stand behind our gear and will make sure we find the right solution for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you reaching out about this issue. Let me look into the details so I can explain what happened clearly and provide the best solution moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for any inconvenience. Let's have an open conversation about what happened so we can prevent this from happening again.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for being a loyal Nike customer. I am committed to resolving this issue promptly and professionally. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand how busy life can get and that delays can be quite inconvenient. Let me look into options so we can get your delivery to you as soon as possible.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this negative experience. At Nike, the customer comes first, and we stand behind our products 100%. Let's get this issue resolved for you promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback regarding ways we can improve our app. Listening to customers helps drive innovation here at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand how disappointing it can be when a new product does not meet expectations. Please know I am here to make this right and ensure you have a positive Nike experience moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the trouble. Let's have an open conversation so I can fully understand what occurred and provide helpful information to explain our policy.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience here. My goal is to resolve this issue promptly and professionally. How may I best assist you today?",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I understand your frustration with this situation and I sincerely apologize for the inconvenience. Providing an excellent customer experience is extremely important to us at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for bringing this issue to my attention today. I am committed to resolving this issue promptly and professionally. How may I best assist you moving forward?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you reaching out regarding this issue with your order. My goal is to fully understand what happened so I can explain the next steps clearly while we work to make this right.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for any confusion or inconvenience here. My priority is ensuring you have a positive experience with Nike as we work together to resolve this issue promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your feedback on how we can enhance the customer experience. Listening to our customers helps drive future improvements with both our products and services.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I completely understand your disappointment with how this issue was handled. My commitment is to make this right, while ensuring your experience with our company is a positive one moving forward.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize that this product did not perform as expected. At Nike, we stand behind what we sell. Let me review the details so I can resolve this properly for you today.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience as I look into what happened with your order. My goal is to explain the situation clearly and outline the resolution options we have available.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that you had a negative experience with our services. My commitment is to resolve issues promptly and professionally. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting Nike. I sincerely apologize for any confusion. My goal is to listen closely so I can explain our policies clearly while we work on a solution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thanks for your feedback. Understanding where we fall short helps Nike continuously improve. I want to make this right, what solution works best for you?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the delayed response from our representative. Customer satisfaction is extremely important to us. Please know I am here now to assist and resolve this issue for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I completely understand your perspective and apologize that this product has not worked as expected. Please know we stand behind our gear and will make this right for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience. I am committed to fully understanding what happened so together we can get this resolved properly. How may I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for the inconvenience. Providing excellent service is my number one priority. Let's work together to get you taken care of promptly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting Nike. I am happy to discuss our return and exchange policies to understand what options work best for your situation.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I apologize that you had a negative experience. My goal is to listen closely to fully understand the situation so I can explain what happened clearly while we work on a resolution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I understand your frustration and sincerely apologize for this experience. Providing excellent customer service is incredibly important to us at Nike.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your patience and I sincerely apologize for any inconvenience. My goal is to resolve issues promptly and professionally. How can I assist you today?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate you bringing this issue to our attention. Listening to customer feedback allows Nike to continue enhancing our products and services.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for your understanding while I look into the details of what occurred. My commitment is to resolve this issue properly while ensuring a positive experience.",
            modelOutput: 0,
            correctOutput: 1,
            isCorrect: false,
          },
          {
            input:
              "I apologize for the inconvenience. Let's have an open conversation so I can fully understand your perspective, explain our policy clearly and determine the best solution.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for contacting our team. I sincerely apologize for this negative experience. Please know our goal is always complete customer satisfaction.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I appreciate your patience. My priority is getting this resolved promptly while also listening closely to fully understand your perspective so we get this handled properly.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "Thank you for bringing this to my attention. Our goal at Nike is complete customer satisfaction. Let me look into our options for making this right for you.",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "I sincerely apologize for this negative experience and appreciate you taking the time to reach out. Resolving issues promptly is my number one priority. How can I make this right?",
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              ' "I completely understand your perspective and appreciate you bringing this issue to our attention. Our team is committed to continuously improving based on customer feedback."',
            modelOutput: 1,
            correctOutput: 1,
            isCorrect: true,
          },
          {
            input:
              "You're wasting my time. If you didn't want help then why did you even contact us?",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Sorry but that item is final sale so no returns or exchanges allowed no matter what.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You clearly damaged that yourself by not following proper care instructions. There's nothing I can do at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "We don't provide replacements on heavily discounted products due to clearance pricing so you'll just need to repurchase it.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "If you'd read our website you'd know that product isn't covered under our guarantee so there's really no point contacting us about this.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Let me save you some time - we don't offer returns on shoes after they show signs of wear since you obviously used them already.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item was on sale over 6 months ago, we definitely don't have any more in stock. You'll have to buy the newer versions at full price.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Unfortunately the sizing guidelines are pretty clear that you should have ordered a size up, so an exchange wouldn't be approved at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can tell you already submitted that replacement request and my supervisor denied it, so continuing to contact us weekly won't get you anywhere.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policy on sale items is final sale only so when you order from the clearance section that means no returns or refunds under any circumstances.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "You obviously wore those shoes outside since they are dirty now. Any signs of wear means you can't return or exchange them per our return policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That item you ordered was shipped over 3 weeks ago. Our policy clearly states you have up to 14 days from delivery to return so that window has closed.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "It sounds like user error to me - those devices are designed to withstand reasonable activity. The damage you're describing isn't normal wear and tear.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see from the order history that a replacement was already sent. You should have received that last week. Let me know if you require any further assistance.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Per the sizing chart online, you purchased the correct size based on the measurements you provided. Therefore an exchange would not be approved since this was not an error on our end.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed that order 6 months ago when the product was discounted for our annual sale event. I can assure you we do not have further stock available from last year's seasons.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "That item is marked final sale so no returns, refunds or exchanges regardless of reason. All discounted items fall under that policy which is clearly stated at checkout.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon review of your previous inquiries, it appears our team has already provided the available solutions. Please let me know if you have a new question I can assist with.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I will have to deny the request for a replacement given the amount of wear shown and seasonality of the item. In the future, please inspect merchandise promptly before removal from tags and packaging.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You have reached out several times over the past month and spoken with various representatives. At this stage there are no other options so I consider this matter closed.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see this issue has been escalated and our management team has made the final determination that no refund, replacement or exchange will be allowed given the condition noted upon return.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "The manufacturer warranty excludes any defects or damage resulting from wear and tear over time. What you are describing falls outside of covered issues for repair or replacement consideration.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "The notes on your previous request indicate this return was already denied due to tags being removed from the items. All clothing purchases must have original tags intact for return eligibility.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "That product was a seasonal item that went on clearance months ago and sold out. Even if you had requested an exchange when placing the order, we simply don't have further inventory available at this point.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "This product was marked on clearance when purchased which indicates all sales were final. Returns or exchanges are not possible on discounted items under any circumstances per our posted policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon review this return request falls outside the allowed window from original purchase date. Our regular policy allows 14 days from delivery with receipt required. At this stage no exceptions can be made.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I am unable to override the previous decision by my manager regarding your case. Company policy has been followed correctly and no compensation or exchanges will be provided.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "In reviewing your case details, this issue appears to have been caused by failure to follow the product instructions which voids the warranty coverage for repairs or replacement.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policies regarding warranty exclusions due to damage have been upheld correctly in this instance. No replacement, return or account credit is applicable when the issues result from customer misuse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You have been provided detailed information numerous times on why this return was rightfully rejected. Continuing to call daily will not resolve anything further. Do not contact us about this case again.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection, our warehouse determined that the damage to your returned item was caused by improper use that voids the warranty. Therefore, no replacement or refund can be offered at this stage.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "As I have explained in our previous communications, the warranty does not cover intentional damage caused by the customer. No refund, replacement or repairs can be initiated when issues result from misuse.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Regrettably the guidelines around clearance items are firm so discounts are always final sale only. I cannot make an exception without manager approval which was already denied for your case.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You had 30 days from the original ship date to inform us of any issues for return eligibility. Calling us 6 months later is well past that window so there are no options at this time.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "We aim to provide recommendations aligned with each customer's athletic needs. You selected this gear on your own based on available sizing information so an exchange is not warranted.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful review, our previous agents explained there were no defects found with the item you returned for quality issues. All functionality and performance was within expected ranges.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "I can see multiple representatives have already provided the available solution options to address your concerns which have been declined on your end. Please confirm if you have any new inquiries.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this custom order 5 months ago and unfortunately we do not have any ability to remake or recreate it at this later date. All sales on personalized merchandise are deemed final per policy.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our team strives to resolve all customer issues promptly, but we expect civil discourse in return. Please adjust your tone and language or I will be forced to conclude this conversation.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon inspecting the returned package, our team determined that the merchandise had been worn based on markings and other signs of use prior to the return request. This voids eligibility per policy so no actions can be taken.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I have reviewed the case details thoroughly and determined that our staff handled this situation correctly based on current policy guidelines around clearance sales being final purchase.",
            modelOutput: 1,
            correctOutput: 0,
            isCorrect: false,
          },
          {
            input:
              "Returning used workout gear that shows signs of being worn for activity directly violates our return policy. At this point there is no action that can be taken since the item condition makes it ineligible.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this order with express agreement to our posted terms and conditions which state customized and monogrammed products cannot be returned or refunded under any circumstances. No exceptions can be made.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection from our quality team, the damage you are claiming was self-inflicted and not due to any defects on our end. Therefore, your replacement request has been denied.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see you already spoke to several representatives about this issue who clearly explained that the eligibility window closed 30 days after original purchase. Continuing to call will not lead to a different outcome.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Our policy explicitly states that clearance merchandise is not eligible for return or exchange regardless of reason. This is a final sale category so no resolutions can be provided at this stage.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "You placed this order for a product that was final sale and clearance priced at the time, which means it is not eligible for return or refund regardless of reason per our posted policy online.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Upon careful inspection from our team, the damage you are reporting occurred after use of the product and was not due to any original defects. This type of damage voids the warranty so a replacement cannot be sent.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "I can see you have been emailing us for over 2 months but we have provided all available solutions based on policy guidelines. Continuing to contact us will yield the same outcome so I suggest moving on.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
          {
            input:
              "Your tone and language in this email is quite inappropriate. We aim to resolve issues promptly but that becomes difficult when customers use abusive verbal attacks rather than civil discourse.",
            modelOutput: 0,
            correctOutput: 0,
            isCorrect: true,
          },
        ],
      },
    ],
  },
];
