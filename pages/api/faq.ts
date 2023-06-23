import type { NextApiRequest, NextApiResponse } from 'next';

export type Questions = {
  question: string;
  answer: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Questions[]>) {
  res.status(200).json([
    {
      question: 'When is the RSVP deadline?',
      answer: [
        'Please RSVP by XXXX, so we can have an accurate headcount and your preferred menu selections.',
      ],
    },
    {
      question: `Can I bring a date?`,
      answer: [`Please check your invitation. Plus ones will be noted.`],
    },
    {
      question: `Are kids welcome?`,
      answer: [
        `Unfortunately, no; children are not able to attend. With a more intimate venue comes a smaller guest list, so the ceremony and reception will be adults only.`,
      ],
    },
    {
      question: `I have dietary restrictions. What's the best way to let you know?`,
      answer: [`Please denote any dietary restrictions on your response card.`],
    },
    {
      question: `Where should I park?`,
      answer: [
        `We will have discounted event valet parking ($25 + tax) at the hotel available for our guests. There are also a number of nearby parking garages in Georgetown. More parking information can be found <a href="https://www.georgetowndc.com/explore/getting-here/" target="_blank">here</a>.`,
      ],
    },
    {
      question: `What should I wear?`,
      answer: [
        `We suggest cocktail or formal attire that's comfortable, but elegant. That means suit and tie, cocktail dress, floor-length dresses, or gowns, or a stylish combination of suiting pieces.`,
        `No shirt, no shoes, no entry. Remember this <em>is</em> DC and not West Virginia.`,
        `<div style="width:100%;height:0;padding-bottom:54%;position:relative;"><img src="https://media.giphy.com/media/l41YxlUqVzatpICbK/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" /></div>`,
      ],
    },
    {
      question: `What time should I arrive?`,
      answer: [
        `Please arrive between 4:30 and 4:45pm as the ceremony will start promptly at 5:00pm.`,
      ],
    },
    {
      question: `Is the wedding indoors or outdoors?`,
      answer: [
        `The ceremony is outdoors (weather permitting), but cocktail hour and the reception will be indoors.`,
      ],
    },
    {
      question: `I'm coming from out of town. Where should I stay?`,
      answer: [
        `We have room blocks at The Ritz-Carlton Georgetown, Westin Georgetown, and Hilton Garden Inn Georgetown as noted on the <a href="#travel">Travel</a> section, but you are welcome to rest your head wherever works best for you!`,
      ],
    },
    {
      question: `Where are you registered?`,
      answer: [
        `The best gift is your presence, but if you feel so inclined, we have a gift registry at
          Crate & Barrel, Williams Sonoma, Amazon, and a few smaller shops online. We've also added
          a few charities we care about if you'd like to donate in our honor.`,
        `All of this is consolidated over at <a href="https://www.zola.com/registry/jaclynandjimmy2023" target="_blank">Zola</a>.`,
      ],
    },
    {
      question: `What health and safety measures will you be taking during the event?`,
      answer: [
        `We are following Washington, D.C. government guidelines. Masks are not required, but you're welcome to wear one if you feel more comfortable doing so. The ceremony will take place outdoors (weather permitting), and cocktail hour and the reception will be indoors.`,
      ],
    },
    {
      question: `Is it okay to take pictures with our phones and cameras during the wedding?`,
      answer: [
        `We put a lot of time and effort working with our photographer to make sure they capture all the special moments. Please do not use your phone during the ceremony.`,
        `However, we would love for you to take photos and share them during cocktail hour and reception!`,
      ],
    },
    {
      question: `What's your wedding hashtag?`,
      answer: [
        `We don't have one, but we'd love for you to tag our profiles on Facebook or Instagram pages with your photos (@<a href="https://www.instagram.com/abcdefghijaclyn/" target="_blank">abcdefghijaclyn</a> & @<a href="https://www.instagram.com/jimmymorris/" target="_blank">jimmymorris</a>)!`,
      ],
    },
    {
      question: `What can I do while I'm in Washington, D.C.?`,
      answer: [
        `We're excited for you to explore our city! Check out the <a href="#travel">Travel</a> section for some recommendations.`,
      ],
    },
  ]);
}
