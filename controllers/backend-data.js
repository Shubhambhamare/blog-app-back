const get=(req,res)=>{
    console.log("*******Request query************", req.query);
    console.log("*******Request query************", req.params);
const user=[
    {
        Id: "1",
        Category: "bollywood",
        Name: "Thappad",
        Date: "28 Feb 2020",
        Details:"Type: Drama | Imdb: 7.2/10 | Directed:  Akshy kumar | Stars: Tapsi Pannu ",
        Img: "https://english.mathrubhumi.com/polopoly_fs/1.4566830.1582868730!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg",
        About: "'Thappad' is a silent slap on our society's age-old belief that — 'shaadi mein sab kuch chalta hain'. But honestly, should it be that way? And that is what we need to start talking about... now!."
    },

    {
        Id: "2",
        Category: "bollywood",
        Name: "3 idiots",
        Date: "24 May 2007",
        Details:"Type: Action,Comedy , Drama | Imdb: 7.5/10 | Directed: R H | Stars:Amir khan, kareena Kapoor, Amitabh Bachchan ",
        Img: "https://www.filmibeat.com/img/2017/01/3idiotsposter-17-1484649482.jpg",
        About: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "
    },

    {
        Id: "3",
        Category: "bollywood",
        Name: "baahubali2",
        Date: "28 April 2017",
        Details:"Type: Action ,Adventure ,Drama | Imdb: 9.4/10 | Directed: S.S. Rajamouli | Stars:Prabhas, Rana Daggubati, Anushka Shetty, Amitabh Bachchan ",
        Img: "https://images.indianexpress.com/2017/12/baahubali21.jpg",
        About: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His About is juxtaposed with past events that unfolded in the Mahishmati Kingdom"
    },

    {
        Id: "4",
        Category: "bollywood",
        Name: "Chennai Express",
        Date: "10 March 2017",
        Details:"Type: Comedy ,Drama ,Romance | Imdb: 6.2/10 | Directed: Shashank Khaitan | Stars:Sharuk khan, DEEPIKA, Sahil Vaid, ",
        Img: "https://static.toiimg.com/thumb/39611457.cms?width=680&height=512&imgsize=145282",
        About: " A man heading towards Rameshwaram via Chennai express to immerse his late grandfather's ashes unwillingly gets caught amidst goons after helping their boss's daughter and them board the train."
    },

    {
        Id: "5",
        Category: "bollywood",
        Name: "Bareilly ki barfi",
        Date: "18 August 2017",
        Details:"Type: Comedy | Imdb: 7.2/10 | Directed: Ashwiny Iyer Tiwari | Stars:Ayushmann Khurrana, Kriti Sanon, Rajkummar Rao ",
        Img: "https://i.ytimg.com/vi/Ds2JXPKZB6s/maxresdefault.jpg",
        About: "Set in the small-town of Bareilly, Bitti is a free-spirited young girl who lives life on her own terms and refuses to be pressured into getting married. Her life takes a shift when she meets Chirag Dubey and Pritam Vidrohi."
    },

    {
        Id: "6",
        Category: "bollywood",
        Name: "Bhool Bhulaiyaa",
        Date: "12 October 2007",
        Details:"Type: Comedy ,Horror ,Mystery | Imdb: 7.3/10 | Directed: Priyadarshan | Stars:Akshay Kumar, Vidya Balan, Shiney Ahuja ",
        Img: "https://www.nowrunning.com/content/movie/0-2007/Bhool%20Bhulaiyaa/bg10.jpg",
        About: "When U.S.-based Siddharth visits his Indian home town with his new wife, he insists they stay at the ancestral home, laughing off family members’ warnings of ghostly goings-on in the mansion. But events soon make him reconsider his beliefs. As unexplained and terrifying occurrences arise, Siddharth calls on his doctor friend to help solve the mystery. What will be the outcome? Will Siddharth’s friend be able to solve this riddle?"
    },

    {
        Id: "7",
        Category: "bollywood",
        Name: "brothers",
        Date: "15 August 2015",
        Details:"Type: Action, Drama, Sport | Imdb: 6.5/10 | Directed: Karan Malhotra | Stars:Akshay Kumar, Sidharth Malhotra, Jackie Shroff ",
        Img: "https://images.indianexpress.com/2015/06/sidharth-brothers.jpg",
        About: "The Story of two estranged brothers comes to play in the rink. David Fernandes quits his job as a Physics teacher to become a full-time fighter. He is willing to do whatever it takes to save his ill daughter. Monty Fernandes creates a storm on the internet with just one video. Finally getting the chance to prove himself to the world, he trains vigorously. Two brothers, two fighters, and one ultimate fight."
    },


    {
        Id: "8",
        Category: "bollywood",
        Name: "Commando",
        Date: " 3 March 2017",
        Details:"Type: Action ,Crime ,Drama | Imdb: 8.4/10 | Directed: Deven Bhojan | Stars: Vidyut Jamwal, Adah Sharma, Esha Gupta. ",
        Img: "https://static.sacnilk.com/articles/entertainment/box_office/869.jpg",
        About: "A man uses his combat skills to eradicate black money, which has been siphoned to banks abroad."
    },


    {
        Id: "9",
        Category: "hollyWood",
        Name: "Iron Man (2008)",
        Date: "  18 November 2008",
        Details:"Type: Adventure ,Comedy ,Fantasy | Imdb: 7.6/10 | Directed: Bruso Bros | Stars: Robert D JUNIOR,Finn Wolfhard ",
        Img: "https://cdn.mos.cms.futurecdn.net/khJvLQLX8hg9fMV9ZtHoMi-970-80.jpg.webp",
        About: " Iron Man is a fictional superhero who wears a suit of armor. His alter ego is Tony Stark. He was created by Stan Lee, Jack Kirby and Larry Lieber for Marvel Comics in Tales of Suspense #39 in the year 1963 and appears in their comic books. He is also one of the main protagonists in the Marvel Cinematic Universe. Iron Man is played by Robert Downey Jr in the movies Iron Man, Iron Man 2, The Avengers, Iron Man 3, Avengers: Age of Ultron, Captain America: Civil War, Spider-Man: Homecoming, Avengers: Infinity War and Avengers: Endgame and he will reprise his role in the Disney+ series Iron Heart."
    },

    {
        Id: "10",
        Category: "hollyWood",
        Name: "Spider man",
        Date: "  16 Jan 2022",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
        Details: "Action and Advanture  | Directed: Jon Watts | Type: Drama | Stars: Tom Holland,Tobey Maguie, Zendaya",
        About: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    },

    {
        Id: "11",
        Category: "hollyWood",
        Name: "Batman VS superman ",
        Date: " 17 Nov 2026 ",
        Img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyyCYy3OZeCzFfY71jjpeavzbKjXsXjHiUiyOlvPYht81UR9lp",
        Details:" Imdb: 7.0/10 | Directed: Zack Synder | Type: Adventure| Stars: Ben Affleck, Henry Cavil, Gal Galot",
        About: "Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all."
    },

    {
        Id: "12",
        Category: "hollyWood",
        Name: "Lamb ",
        Date: "10 December 2021",
        Img: "https://bgr.com/wp-content/uploads/2021/10/Lamb-A24-Screening-Room.jpg?quality=82&strip=all&w=1440&h=810&crop=1",
        Details: "Imdb: 4.2/10 | Directed: Leroy Kincaide | Type:  Horror |  Stars: Bethan Waller, Johnny Fleming, Kit Smith",
        About: "With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
    },

    {
        Id: "13",
        Category: "hollyWood",
        Name: "Los Angeles",
        Date: "04 Nov 2021",
        Img: "https://imagetot.com/images/2021/11/25/6bd71df918d57382fdd53a55d6dfbcb1.jpg",
        Details: "Imdb: 6.4/10 | Directed:  Valdimar Jóhannsson | Type: Drama ,Horror ,Mystery | Stars: Noomi Rapace ,Hilmir Snær Guðnason ,Björn Hlynur Haraldsson",
        About: "Los Angeles” is the story of Jojo, a young mute, who thinks she hears God calling her to save the Baby Jesus. She packs five angels in a shoe shine kit and takes a one-way trip to Tampa, Florida, where she is picked up by Cash, an escaped…"
    },


    {
        Id: "14",
        Category: "hollyWood",
        Name: "The accursed ",
        Date: "12 November 2021",
        Img: "https://s2.dmcdn.net/v/TLdGn1XT4kc682CK8/x1080",
        Details: " Imdb: 4.8/10 | Directed: Jason Reitman | Type: Drama, Horror | Stars: Yancy Butler, Izabela Vidovic, George Harrison Xanthis",
        About: " Hana spends twenty years suppressing a maleficent curse that was placed upon her bloodline, only to have a family member knowingly release it forcing her to kill or to be killed."
    },


    {
        Id: "15",
        Category: "hollyWood",
        Name: "Man of Steel ",
        Date: "14 June 2013",
        Img: "https://static01.nyt.com/images/2013/05/26/arts/26STEEL_SPAN/26STEEL-superJumbo.jpg",
        Details:" Imdb: 6.4/10 | Directed:  Zack Synder | Type: Action | Stars: Henry Cavill, Amy Adams, Kevin Coster",
        About: "Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.."
    },

    {
        Id: "16",
        Category: "technology",
        Name: " Artificial Intelligence (AI) and Machine Learning ",
        Date: " 1956 ",
        Img: "https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_network_thinkstock_671750598-100724432-large.jpg?auto=webp&quality=85,70",
        Details: "AI was first coined by John McCarthy",
        About: " Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.AI is a computer system able to perform tasks that ordinarily require human intelligence... Many of these artificial intelligence systems are powered by machine learning, some of them are powered by deep learning and some of them are powered by very boring things like rules. There are four types (i) Reactive Machines (ii) Limited Memory (iii) Theory of Mind  (iv) Self-Awareness Examples: Siri, Alexa, Self-driving cars, Email spam filters, Netflix's recommendations."
    },

    {
        Id: "17",
        Category: "technology",
        Name: " Big Data ",
        Date: " early 2000s ",
        Img: "https://www.analyticssteps.com/backend/media/thumbnail/259236/7729779_1614949022_big%20data%20applications.png",
        Details: "RPA is technology given by Arthur Samuel",
        About: "Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software. "
    },

    {
        Id: "18",
        Category: "technology",
        Name: "Automation ",
        Date: " in 1972 ",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndkfY2ex3QzMYZ6pqjaN4wQUd2Q37z4E2Aw&usqp=CAU",
        Details: "research project on ARPANET",
        About: "Automation describes a wide range of technologies that reduce human intervention in processes. Human intervention is reduced by predetermining decision criteria, subprocess relationships, and related actions — and embodying those predeterminations in machines."
    },

    {
        Id: "19",
        Category: "technology",
        Name: " Python",
        Date: " February 20 1991 as Python 0.9.0 ",
        Img: "https://cdn.hackernoon.com/images/q141s3xfs.jpg",
        Details: "high-level programming language with dynamic semantics, used for general-purpose programming",
        About: "Python is a high-level object-oriented programming language that was created by Guido van Rossum. It is also called general-purpose programming language as it is used in almost every domain we can think of as mentioned below: Web Development. Software Development. Guido van Rossum When he began implementing Python, Guido van Rossum was also reading the published scripts from “Monty Python's Flying Circus”, a BBC comedy series from the 1970s. Van Rossum thought he needed a name that was short, unique, and slightly mysterious, so he decided to call the language Python. It was initially designed by Guido van Rossum in 1991 and developed by Python Software Foundation. It was mainly developed for emphasis on code readability, and its syntax allows programmers to express concepts in fewer lines of code. In the late 1980s, history was about to be written. As the backbone of many websites, HTML is considered to be the simplest programming language for those who are just getting started. HTML was also named the most intuitive language by those surveyed. ... Python was the second-easiest programming language to learn, followed by JavaScript."
    },
    {
        Id: "20",
        Category: "technology",
        Name: "Android ",
        Date: " September 23 2008 ",
        Img: "https://www.seasiainfotech.com/blog/wp-content/uploads/2018/12/Android-Application-Development-Process-The-Perfect-Guide.png",
        Details: "The first commercially available smartphone running Android was the HTC Dream, also known as T-Mobile G1, announced on September 23, 2008.",
        About: " Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the Open Handset Alliance and commercially sponsored by Google. It was unveiled in November 2007, with the first commercial Android device, the HTC Dream, being launched in September 2008. It is free and open-source software; its source code is known as Android Open Source Project (AOSP), which is primarily licensed under the Apache License. However most Android devices ship with additional proprietary software pre-installed,[14] most notably Google Mobile Services (GMS)[15] which includes core apps such as Google Chrome, the digital distribution platform Google Play, and associated Google Play Services development platform."
    },
    {
        Id: "21",
        Category: "technology",
        Name: "Ethical hacking",
        Date: " In the 1980s and 1990s ",
        Img: "https://www.astatraining.com/wp-content/uploads/2020/03/what-is-an-ethical-hacker.jpg",
        Details: " The phrase “ethical hacking” was first used in 1995 by IBM Vice President John Patrick",
        About: "Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization's infrastructure that an attacker can use to exploit an individual or organization. The industry will witness a 350% growth by 2021. In India, the number is expected to rise by 77,000 in the next five years. Technical hackers can look for top companies like Dell, Google, Wipro, Reliance, Infosys, and IBM to land the highest-paid ethical hacking jobs in India. Hacker Jonathan James from Florida hacked NASA computers in 1999 when he was 15 years old, resulting in a three week system shutdown and an estimated recovery cost of $41,000. He also invaded computers of a Defense Department agency and intercepted 3,300 emails with 19 employee passwords."
    },
    {
        Id: "22",
        Category: "technology",
        Name: "Cloud computing technology",
        Date: " August 9, 2006 ",
        Img: "https://images.ctfassets.net/3prze68gbwl1/3sEK5r6suPvvoX2TJzTrNf/c5c91e0ad838c8dfc79d19e5cf5d42fc/Blog_CloudComputingTechnology.png",
        Details: "",
        About: "Cloud computing technology gives users access to storage, files, software, and servers through their internet-connected devices: computers, smartphones, tablets, and wearables. Cloud computing providers store and process data in a location that's separate from end users. Part of the debate is who should get credit for inventing the idea. The notion of network-based computing dates to the 1960s, but many believe the first use of “cloud computing” in its modern context occurred on August 9, 2006, when then Google CEO Eric Schmidt introduced the term to an industry conference."
    },
    {
        Id: "23",
        Category: "fitness",
        Name: " Chest Exercise ",
        Date: " August 9, 2021 ",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWpxAv1PDcJIeQtBT_uZB29FPkyDKx5H7CdknxJad1WKysQR7ZsrYki3nZTPxJwBB2es&usqp=CAU",
        Details: " chest exercises for building upper body strength . ",
        About: "The chest press is a classic upper-body strengthening exercise that works your pectorals (chest), deltoids (shoulders), and triceps (arms). The chest press strength training exercise works the pectoral muscles of the chest. You can use a variety of equipment, including dumbbells, barbells, a Smith machine, suspension trainer, or even resistance bands, to perform a chest press. The chest press exercise targets the main muscle of the chest, the pectorals. It also uses the anterior deltoids of the shoulder and the triceps brachii of the upper arm. Building chest support and definition is desirable for a fit look, but building this muscle is also functional. You need strong pecs for power for sports where you swing a bat, racket, or club. The chest press also helps you with any daily activities that require pushing or carrying. It can help restore muscle balance for athletes that primarily use pulling muscles, such as in wrestling, rock climbing, and swimming."


    },

    {
        Id: "24",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: " Back Press Exercise",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4U9nOOx_SA4oYjLJWs4EiVZOFpV_BPKJ0hJXg2_m7dSRvS4PZqs0i2InhnlDAQHVwzxc&usqp=CAU",
        Details: " Back exercises for building Back body strength ",
        About: "A big, strong back can take you far in your athletic endeavors. The back muscles help you to twist your torso, pull your arms in and down from overhead, and, most importantly, stabilize your spine. When you train these essential muscles, you’ll be more efficient at pulling and twisting motions in general. Also, a bigger and stronger back will help you deadlift and bench press more weight more efficiently. We’re going to lay out 16 of the best back exercises you could choose from, and you’ll also learn a lot more about why back training is important and just how to implement these movements into your exercise regimen. Some exercises are - (i) Deadlift (ii) Pull-Up  (iii) Bent-Over Row  (iv) Chest Supported Row  (v) Single-Arm Dumbbell Row  (vi) Inverted Row "


    }, {
        Id: "25",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "Leg Exercise",
        Img: "https://www.cnet.com/a/img/P8tVNQuKFEIQ4EvclLRVQLOaihI=/1200x675/2020/06/23/aafc1ace-f176-411a-9695-7683aacd35c9/gettyimages-1004449544.jpg",
        Details: " improve overall athletic performance ",
        About: " Maintains good body symmetry. Prevents osteoporosis and maintains good bone health.Makes joints stronger.Strengthens the core. Strong legs help you walk, jump, and balance. They also support your body and let you enjoy everyday activities. If you want to tone your legs, follow these exercises and tips. 1. Squats - The squat is one of the best exercises to tone legs. It also sculpts the butt, hips, and abs. Squats are ideal if you have back problems. Since they’re done while standing up and without extra weight, they won’t strain the back. For balance or extra support, perform your squats standing alongside a wall or next to a chair or the edge of a table with one hand on the object. Resist the urge to pull on it or push off from it. 2. Lunges - Lunges work your thighs, butt, and abs. This move uses both legs at the same time, making it a great exercise for strong legs. 3. Plank leg lifts - Regular planks target the upper body, core, and hips. You can add leg lifts to strengthen your butt and upper legs. 4. Box jumps - You can also do box jumps on a plyometric box. This explosive workout is one of the best ways to tone your legs, butt, and core. When you land on the box, drop your hips to absorb the force. Don’t lock your knees and quads. This can hurt your knees. "


    },


    {
        Id: "26",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "Triceps Exercise",
        Img: "https://www.bodybuilding.com/images/2021/april/triceps-workout-for-beginners-header-830x467.jpg",
        Details: " The triceps are essential for building upper body strength  ",
        About: "The best tricep exercises for men are a surefire way to help get you to the nearest gun show (figuratively speaking, of course). And while bulging triceps aren’t as visible as bulging biceps, don’t take that to mean they’re any less important. On the contrary, hardcore tricep workouts will build the necessary strength you need to keep pushing yourself in the gym. That’s because your triceps take up nearly 60 per cent of your upper arm mass, thereby providing a literal foundation for your continuing muscle growth, definition, and improvement. To put it another way: your overall upper arm strength is only as good as the strength of your triceps. Furthermore, no fitness freak would really argue with horseshoe triceps, a veritable sign of modern fortitude. If all this isn’t enough to pivot your focus toward this oft-overlooked muscle group, then you just keep on with bicep workouts and see how far it takes you. Go ahead. We dare you…  Don’t forget to warm-up those muscles before you start in on the harder exercises. If you’re a beginner, stick with machines before moving onto free weights. If you’re trying to build mass, start with multi-joint exercises and don’t be afraid to go to failure. Also, be sure to include both arm-overhead and lateral exercises in your tricep workout. If muscle definition is your goal, start with multi-joint exercises and then work your way toward targeted supersets. Move quickly and don’t be afraid to go to failure. The lateral head—which is located on the top of your tricep—is the largest of the three heads in your upper arm. If you’re focusing on this area, incorporate exercises during which your arms stay by your sides, such as an overhead grip."


    },


    {
        Id: "27",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "ABS Exercise",
        Img: "https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/10/plank.jpg?itok=KCQrGn4s",
        Details: " Strong abdominal muscles can help improve posture and balance. ",
        About: "A strong core improves sports performance. ...  A strong core prevents lower-back pain.  A strong core can improve your posture. You'll breathe better with a strong core. Mountain climber - Start in a straight arm press-up position with one knee up between your elbows and only the back foot on the floor,” says Chamberlain. “Jump the back foot off the floor and swap it with the front foot. Focus on pulling your stomach muscles in throughout the movement to protect your spine and add more intensity. This is a great exercise for burning calories as well as developing your abs. Start with 30 seconds of mountain climbers and work towards 60 seconds.  Plank- An all-time core classic. Hold a straight line from your shoulders to your ankles while supporting yourself on your forearms and toes. The plank is great for beginners and there is minimal movement so less chance of getting it wrong,” says Chamberlain. It’s also easy to scale – start at 20-second holds and work up towards 60 seconds. Make sure you engage your core by tilting your pelvis back slightly to flatten your lower back – a curved lower back is to be avoided."


    },


    {
        Id: "28",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "ForeArm Exercise",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3RwM6VV_-zagIep_Oh576J1DOb0M0EyEjw&usqp=CAU",
        Details: " Strengthening your forearms also increases grip strength ",
        About: "Forearm exercises stretch and strengthen the muscles crossing your hands, wrists, and elbows. These are the muscles used in daily life for tasks such as opening a glass jar or carrying a suitcase up a flight of stairs. They’re used in sports such as golf, racquetball, and basketball, too. Strengthening your forearms also increases grip strength, which is related to upper body strength. A strong grip helps you carry, hold, and lift items in your everyday life and during athletic activity. Plus, you’ll have more power when you work out, which will bring more strength to your entire body. Begin with 5- to 10-pound dumbbells. Gradually increase the weight as you get stronger. Grip the dumbbells tightly throughout the movement. If you don’t have weights, you can use a can of soup or a bottle of water."

    },

    {
        Id: "29",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "Shoulder Exercise",
        Img: "https://hips.hearstapps.com/vidthumb/brightcove/578940c0e694aa370d8835b3/thumb_1468612802.png?crop=1xw%3A1xh%3Bcenter%2Ctop&resize=480%3A270",
        Details: " promote healthy movement patterns and improve posture and muscle function ",
        About: "Reduces pain. Increases range of motion and function. Supports healthy cartilage. Helps with weight loss. Helps maintain function. Virtually every upper-body exercise involves your shoulder muscles to some extent, so strengthening your shoulders enables you to lift heavier weights for chest and back exercises. Injury prevention: If your shoulders are weak, they're going to take a beating even if you perform chest and back exercises perfectly. Stand with your feet shoulder width apart apart. Lift a barbell or dumbbells to shoulder level and perform an overhead shoulder press by raising the barbell or dumbbells over your head. Hold the weight above your head for a few seconds before gradually lowering in a controlled motion. Training your shoulders will help you improve your posture, and not only will this help you look slimmer, but it will also improve your overall core and back strength. What's more, studies have found good posture bolsters focus, mood and confidence."


    },

    {
        Id: "30",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "Biceps Exercise",
        Img: "https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2018/08/modified-v-sit.jpg?itok=Py5Nt9am",
        Details: " build arm strength. ",
        About: "A proper biceps workout is key to building stronger arms and increasing your power to lift. The benefits of stronger biceps are not only for better aesthetics but also for better pulling power as your increased power to pull can help in a range of exercise that depend on this motion. Upper Body Health: Biceps collaborate in forearm supination, elbows flexion, and shoulder stabilization so stronger biceps help you to maintain a healthy upper body. Aesthetics: Bicep curls help develop beautiful arms, which can translate into a great physique. Anatomy-aside, the best bicep workouts and exercises allow you to increase your muscle mass, strength, stability and aesthetic appeal. Adding these movements to your overall fitness regime can elevate your routine from a basic gym-goer's attempt to one of the best on the planet. Strong biceps play an important role in an overall strong and functional upper body. Building bicep strength helps you perform everyday tasks such as carrying and lifting. There are some unique tips to know for optimal biceps training to make the most of your workouts. Some people simply use too much weight. Best Biceps Exercises - Barbell Curl , Chin-Up, EZ-Bar Preacher Curl , Hammer Curl , Incline Dumbbell Curl , Facing-Away Cable Curl , Reverse-Grip Bent-Over Row , Cable Curl."


    },

    {
        Id: "31",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Pizza",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdAaFieARJBSTyBdcg4jH_tCXE2xbYjxNNg&usqp=CAU",
        Details: " Italy",
        About: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. "


    },

    {
        Id: "32",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Coffee",
        Img: "https://s3.envato.com/files/271771964/drink-71.jpg",
        Details: " Origin - South Asia",
        About: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee",
    },

    {
        Id: "33",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Barfi",
        Img: "https://sukhis.com/app/uploads/2017/06/IndianMithai.jpg",
        Details: "  Indian subcontinent ",
        About: "Milk Barfi or Milk Powder Burfi is a super delicious, easy to make, melt in mouth Indian sweet or fudge recipe prepared using 5 ingredients in less than 30 minutes. One of the best gluten free, no bake dessert. A perfect sweet to make on Diwali, Holi, Navratri or any special occasion! Burfi is a popular Indian milk based sweet recipe that is prepared during festivals like Diwali or Deepavali, Holi, Rakhi and any special occasions like birthdays and weddings. There are many barfi varieties – but few of my favorites include Besan burfi (barfi), Kaju barfi (kaju katli), Chocolate burfi, Pista Burfi, Almond or Badam Barfi. Traditionally this requires khoya or mawa – milk solids – and some does need sugar syrup. But I always like to take shortcuts and have prepared using milk powder and this does not require you to make any sugar syrup or check for consistency. This method using milk powder makes it quicker and easier with no compromise in taste if you follow the steps exactly as given below.  "


    },


    {
        Id: "34",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Paneer Makhani",
        Img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
        Details: "Origin -  Punjab",
        About: "Paneer Makhani is a delectable, traditional Indian dish made with cubes of cheese cooked in a rich and creamy tomato based sauce. The word makhani means “buttery,” and is derived from the word makhan which means “homemade butter.” This dish is the vegetarian version of Murgh Makhani, which is commonly known outside of India as “Butter Chicken.” Butter Chicken was invented by Mr Kundan Lal Gujral in his Moti Mahal Restaurant in Delhi and has since become one of the most beloved Indian dishes across the globe. Turning the original recipe into one suitable for vegetarians by swapping in paneer, mushrooms or lentils is very common practice. This creamy, tangy homestyle gravy is made mostly with tomatoes, cream and spices. While very similar to my Paneer Butter Masala and Paneer Makhanwala, this tasty recipe has a slightly different proportion of spices. I also believe that a traditional makhani gravy should be made without onions, which is how I make mine."


    },

    {
        Id: "35",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Chicken Karahi",
        Img: "https://myfoodstory.com/wp-content/uploads/2021/09/Kadai-Chicken-Karahi-Chicken-3-1067x617.jpg",
        Details: " originates from the northern and northwestern parts of South Asia. ",
        About: "Chicken Karahi, or Kadai chicken, is undoubtedly one of the most popular curries in and out of Pakistan and India. This is a restaurant-style Pakistani Chicken Karahi recipe that can be prepared quickly and easily with no finicky steps. Karahi is named after the pan in which it was originally cooked – a heavy, often cast-iron pan that’s similar to a wok, but rounder with a flatter base. Traditionally, meat would be simmered and stir-fried in this karahi in an open fire. I’ve read in multiple places that karahi originates in the Khyber Pakhtunkhwa (formerly Northwest Frontier) province of Pakistan, which makes sense given the cuisine’s heavy use of meat and black pepper. Chicken karahi’s distinguishing features are its rich, tomatoey base and a fragrant finishing of green chili peppers, cilantro, and slivers of ginger."


    },


    {
        Id: "36",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Rasgulla",
        Img: "https://smedia2.intoday.in/indiatoday/images/stories/2017August/dish16_081417053047.jpg",
        Details: " Rosogola is a South Asian syrupy dessert ",
        About: "Rasgulla, also known as Rosogolla, Rasgola, or Rosogola is a South Asian syrupy dessert popular in the Indian subcontinent and regions with South Asian diaspora. It is made from ball-shaped dumplings of chhena (an Indian cottage cheese) and semolina dough, cooked in light sugar syrup made of sugar. This is done until the syrup permeates the dumplings. The earliest evidence of rasagola can be found in the epic poem Dandi Ramayana which was composed by famous Odia poet Balarama Dasa in which he mentioned that Rasagola is offered to Maa Laxmi by Lord Jagannath in a ritual called Niladri Bije. In 2017, when West Bengal got its Rosogolla's Geographical indication status, the Registry office of India clarified that West Bengal was given GI status for Banglar Rosogolla and Odisha can claim it too if they cite the place of origin of their variant along with colour, texture, taste, juice content and method of manufacturing."


    },

    {
        Id: "37",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Biryani",
        Img: "https://i.ytimg.com/vi/BCKMeHuRX0I/maxresdefault.jpg",
        Details: "Origin place - India",
        About: "Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. It has gained popularity in South India, and is also prepared in other parts of the world such as Iraqi Kurdistan.[7] Biryani is the single most-ordered dish on Indian online food ordering and delivery services. There are many types of biryani, whose names are often based on their region of origin. For example, Sindhi biryani developed in the Sindh region of what is now Pakistan, and Hyderabadi biryani developed in the city of Hyderabad in South India. Some have taken the name of the shop that sells it, for example: Haji Biriyani, Haji Nanna Biriyani in Old Dhaka,[31] Fakhruddin Biriyani in Dhaka,[32][33] Students biryani in Karachi, Lucky biryani in Bandra, Mumbai and Baghdadi biryani in Colaba, Mumbai.[24] Biryanis are often specific to the Muslim communities where they originate; they are usually the defining dishes of those communities. Beef biryani, as the name implies, uses beef as the meat. In Hyderabad, it is famous as Kalyani biryani, in which buffalo or cow meat is used.[36][37] This meal was started after the Kalyani Nawabs of Bidar came to Hyderabad sometime in the 18th century. The Kalyani biryani is made with small cubes of beef, regular spices, onions and many tomatoes. It has a distinct tomato, jeera and dhania flavor.[38] In Kerala, beef biryani is well known.[39] The Bhatkali biryani is a special variant where the main ingredient is onion. Its variations include beef, goat, chicken, titar, egg, fish, crab, prawn and vegetable biryani."


    },

    {
        Id: "38",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Pav bhaji",
        Img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
        Details: " Origin - south india",
        About: " Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread. Vegetables in the curry may commonly include potatoes, onions, carrots, chillies, peas, bell peppers and tomatoes. Street sellers usually cook the curry on a flat griddle (tava) and serve the dish hot. A soft white bread roll is the usual accompaniment to the curry, but this does not preclude the use of other bread varieties such as chapati, roti or brown bread. About Pav Bhaji Recipe | Pav Bhaji Masala Recipe: Pav Bhaji is one of the most popular Indian snacks, specially in Maharashtra. It is a delicious combination of different vegetables cooked and mashed together. This is one dish, loved by people of all ages and cooked with different variations in different households. Pav Bhaji is the smartest way to have all the healthy vegetables together without compromising on the taste. Here is a spicy, easy and low fat Pav Bhaji recipe for you to easily cook this iconic dish at home. This famous Mumbai street food item, Pav Bhaji is an amalgamation of all sorts of healthy vegetables which you might not like when eaten individually. You may add vegetables of your choice or even skip the one's you don't like. Pav bhaji is the most delicious dish through which kids can eat as many veggies as you want them to! Potatoes, tomatoes, green peas all mashed together with spices and lemon and paired with buttery buns is a feast in itself. Pav bhaji is a dish that can be enjoyed at any hour of the day, be it for brunch, lunch or even as a dinner. It is a quintessential Indian snack recipe. The best way to feast on Pav bhaji is to serve it with roasted pav buns, some chopped onion and lemon with sliced tomatoes to go with it. Don't forget to garnish the Bhaji with loads of butter on top!"


    },


    {
        Id: "39",
        Category: "fitness",
        Date: " August 9, 2021 ",
        Name: "Biceps Exercise",
        Img: "https://pbs.twimg.com/media/Dn_sBL_WkAAfi7K.jpg",
        Details: " build arm strength. ",
        About: "A proper biceps workout is key to building stronger arms and increasing your power to lift. The benefits of stronger biceps are not only for better aesthetics but also for better pulling power as your increased power to pull can help in a range of exercise that depend on this motion. Upper Body Health: Biceps collaborate in forearm supination, elbows flexion, and shoulder stabilization so stronger biceps help you to maintain a healthy upper body. Aesthetics: Bicep curls help develop beautiful arms, which can translate into a great physique. Anatomy-aside, the best bicep workouts and exercises allow you to increase your muscle mass, strength, stability and aesthetic appeal. Adding these movements to your overall fitness regime can elevate your routine from a basic gym-goer's attempt to one of the best on the planet. Strong biceps play an important role in an overall strong and functional upper body. Building bicep strength helps you perform everyday tasks such as carrying and lifting. There are some unique tips to know for optimal biceps training to make the most of your workouts. Some people simply use too much weight. Best Biceps Exercises - Barbell Curl , Chin-Up, EZ-Bar Preacher Curl , Hammer Curl , Incline Dumbbell Curl , Facing-Away Cable Curl , Reverse-Grip Bent-Over Row , Cable Curl."


    },


    {
        Id: "40",
        Category: "food",
        Date: " August 9, 2021 ",
        Name: "Chole Bhature",
        Img: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-punjabi-chole-bhature-chana-bhatura.jpg",
        Details: " Origin - North India ",
        About: "Chole bhature  is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri. Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida. Although it is known as a typical Punjabi dish, there are varied claims around the origin of dish. Chole bhature (Hindi: छोले भटूरे) is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida. Although it is known as a typical Punjabi dish, there are varied claims around the origin of dish. One of the most popular dishes for which Punjab is known for, Chhole Bhature is an absolute delight. The Bhature are made with flour and milk rather than wheat flour, and this makes it different from a regular poori. The dish is found in every corner of Punjab. Chole Bhature also called Chana Bhatura is a dish originated initially within the northern a part of the Indian subcontinent. Now this dish is famous always in Northern India while having massive following in Punjab, India, with its very own variant."


    }



]
if(req.query.id){
    const newuser =user.filter(value=>value.Id===req.query.id)
    res.send(newuser);
} else if(req.params.category){
    const newuser =user.filter(value=>value.Category===req.params.category)
    res.send(newuser);
}else{
    res.send(user)
}

}
module.exports.blogData = get
