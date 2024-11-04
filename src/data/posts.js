// src/data/posts.js

const posts = [
  // In your posts.js file

  //   {
  //     slug: "best-food-in-champaign",
  //     image: "/blog/food_pic.png",
  //     timeAgo: "October 28, 2024",
  //     readTime: "10 min",
  //     title: "Best Food in Champaign",
  //     excerpt:
  //       "First and foremost, I'm a foodie 😋. Let me tell you about some of my favorite spots in Champaign, both well-known and hidden gems!",
  //     content: `
  //   First and foremost, I'm a foodie 😋. Let me share some of my favorite spots in Champaign, both popular and hidden gems!

  //   ![Delicious Food](https://via.placeholder.com/800x400?text=Delicious+Food)

  //   ## Top Restaurants to Visit

  //   ### 1. The Cozy Corner

  //   The Cozy Corner offers a warm atmosphere and delightful dishes that make you feel right at home.

  //   - **Signature Dish:** Grandma's Homemade Lasagna
  //   - **Location:** 123 Main Street

  //   ![Cozy Corner](https://via.placeholder.com/400x300?text=Cozy+Corner)

  //   ### 2. Urban Eats

  //   A modern take on classic favorites, Urban Eats is the place to be for innovative cuisine.

  //   - **Signature Dish:** Avocado Toast Deluxe
  //   - **Location:** 456 Elm Street

  //   ![Urban Eats](https://via.placeholder.com/400x300?text=Urban+Eats)

  //   ## Hidden Gems

  //   ### The Secret Garden Café

  //   Tucked away in a quiet alley, The Secret Garden Café is a tranquil escape from the hustle and bustle.

  //   - **Signature Drink:** Lavender Lemonade
  //   - **Ambiance:** Outdoor seating surrounded by greenery

  //   ![Secret Garden Café](https://via.placeholder.com/800x400?text=Secret+Garden+Café)

  //   ## Street Food Delights

  //   Don't miss out on Champaign's vibrant street food scene!

  //   - **Food Trucks:** A variety of options from tacos to ice cream
  //   - **Farmers' Market:** Fresh produce and homemade goods every weekend

  //   ![Street Food Fest](https://via.placeholder.com/800x400?text=Street+Food+Fest)

  //   > "One cannot think well, love well, sleep well, if one has not dined well." – Virginia Woolf

  //   ## Conclusion

  //   Champaign has something to offer every palate. Whether you're a fan of cozy cafés or modern eateries, you're sure to find a favorite spot here.

  //   **Bon appétit!**

  //     `,
  //     imagePos: "cover",
  //   },
  // In your posts.js file

  {
    slug: "sprained-ankle-x-hackathon",
    image: "/blog/memora_screenshot.png",
    timeAgo: "November 3, 2024",
    readTime: "15 min",
    title: "Sprained Ankle x Hackathon",
    excerpt:
      "Spraining my ankle right after the hackathon started was rough 🤕, but I started working on my first AR project in the hospital waiting room!",
    content: `

Fresh out of a hackathon opening ceremony, brimming with ideas and eagerly eyeing my barbeque pizza, I got a <em>tad</em> careless. 

The stairs were tall and hard, and as I tripped and fell, I tried my best to catch my pizza 😭. Though I succeeded, my efforts would probably have been better served at protecting my ankle, which almost immediately began to balloon.

<img
  src="/blog/me_anshi.png"
  alt="Me and Anshi waiting"
  style="max-width: 320px; width: 100%; height: auto;"
  class="mx-auto my-6 rounded-lg shadow-lg"
/>

I was with my friend Anshi (shoutout Anshi ❤️) , who slowly helped me walk back home, and I ignored the swelling, deciding to sleep it off. As it turns out, this probably wasn't the greatest decision.

### The Next Morning

When I woke up the next morning, with a foot faintly resembling a clown shoe, I realized sleeping it off probably hadn't been the best strategy. I slowly hopped to the health center on campus, and got my first ever boot and crutches. 
- **PS:** Walking on crutches is an INSANE workout. I felt like I did an hour of pilates after 10 minutes of walking 😂. I should probably start going to the gym...

<img
  src="/blog/boot.png"
  alt="Me and Anshi waiting"
  style="max-width: 350px; width: 100%; height: auto;"
  class="mx-auto my-6 rounded-lg shadow-lg"
/>

Since it was the weekend, and the x-ray technician had to drive in, I was sitting in the waiting room for a pretty long time. The hackathons only prompt was that our project <em>had</em> to use AI, 
but I narrowed it down to a learning based platform, and ... Memora was born!

<img 
    src="https://i0.wp.com/gallery.mailchimp.com/21ab45285a43248c52473f8e6/images/ad76c039-2d2a-4d21-a6c1-2f6bd639706c.jpg?ssl=1"
    alt="Sherlock"
    style="max-width: 320px; width: 100%; height: auto; float: right; margin-left: 1em;"
    class="rounded-lg shadow-lg"
/>
## The Idea

In ancient times, people would hold massive books worth of information in their minds. They did this through using "memory palaces". You might've heard about it in shows like Sherlock or Hannibal.

### The Story

<em>Simonides of Ceos</em> was a Greek poet at a very important party. It was a room full of aristocrats, military leaders, and philosophers, and when Simonides went outside
during dinner to recieve a message, he never could've anticipated that the roof would collapse. Though everyone was crushed, he identified every single body.

**How?** A memory palace. By using the physical location to arrange mental imagery, he remembered an incredible amount of information in order. To this day,
people use this technique to memorize digits of Pi, the periodic table, and so much more.

<img 
    src="https://1.bp.blogspot.com/-Qa4q5IKd8hw/Xg0APmgFlXI/AAAAAAAAkLM/munvuJZwSoQwzn9-l70NjcA2tYPviye9ACLcBGAsYHQ/w1200-h630-p-k-no-nu/Simonides.jpg"
    alt="Simonides of Ceos"
    class="mx-auto"
/>

### What I Built

My guiding thought was, <em>If people could build memory palaces back in the day, how much easier could it be with the help of AI and Augmented Reality?</em>

Regardless of what you have to memorize or what test you have to study for, AI can break it into building blocks that can be placed around a familiar location using Augmented Reality.
You could reap all the benefits of making a memory palace without much of the planning. 

I finally had an idea - time to get to the code!!!

## Starting to Code

- **Main Tech Stack:** Google's Gemini API, Swift + ARKit
- **Things I didn't know:** iOS development, ARKit, GeminiAPI
- **Things I knew:** How to learn :)

Since I didn't have any experience with native iOS development, the very first thing I did was download the latest version of XCode 
(which took 3 hours !!). While it was downloading, I started playing around with the Gemini API with Python, getting it to generate
objects for a memory palace. 

Finally, when Xcode was setup, I opened up Xcode's Reality Composer Pro, and started playing around with usdz files. I've never worked with
3D object software before, so this part was awesome 💖

<img 
    src="https://docs-assets.developer.apple.com/published/0838e5075126ee9f4025dae677c6c63f/RCPro-BiplaneWindow@2x.png"
    alt="Reality Composer Pro"
    class="mx-auto"
/>

By this time I ended up getting called in for an X-ray, which came back inconclusive (they didn't know if it was a fracture or a sprain), and I went home and crashed 😴. 
The next morning, though I woke up at 3 AM and got back to work!

Starting out with some basic Swift tutorials, I built out a simple starting frontend, and made my first object in ARKit, a solid cube.
<img 
    src="https://general-pusher-cms.s3.amazonaws.com/blog/building_ar_with_arkit_and_scenekit_09_blender_712da5e229.png"
    alt="Reality Composer Pro"
    class="mx-auto"
/> 

It took me a while to get this displaying on the user's side, but after that, I was on a roll, setting up the Gemini API to make calls from
the text the user passed in, and using that data to create and display AR objects. It hit 10 AM on Sunday, and since my parents had come over to visit on Dad's Weekend, and the hackathon deadline was 12 PM,
it was time to submit. Here's what I had at that point!

<iframe width="560" height="315" class="mx-auto" src="https://www.youtube.com/embed/RJMOueJuGog?si=TOUxpPjTz3RfE89q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Some Difficulties + Lessons Learned
This was a huge learning process, with tech that was all new for me, but here are some specific bumps that I spent a lot of time diving into:
1. **iOS Compatability:** Since I was testing an AR app, I had to use a physical phone instead of a simulator. There was just one problem with that - my phone is on an extremely old iOS version 😭. It took a <em>lot</em> of playing around to understand the dependencies between the different iOS versions and ARKit, but I learned a lot about iOS dev from it!
2. **Music Feature:** I was playing around with adding Gemini generated audio as a user enters the AR memory palace, but it turned out to be a huge struggle to embed that audio so that it would dynamically generate, and play only when the user opened the memory palace. It's a work in progress 😅

**Next Steps:** Continuing to expand on the app so that the text and the AR objects produced are grouped together much better, and making sure the
visualization looks good regardless of room size.

> "The beautiful thing about learning is nobody can take it away from you." – B.B. King

## Conclusion

This was the most chaotic weekend I've had in a while, but now I have a newfound understand of Xcode and RealityKit, and I own a boot!
  `,
    imagePos: "contain",
  },
];

export default posts;
