/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
         MarineBlue:" hsl(213, 96%, 18%)",
         PurplishBlue: "hsl(243, 100%, 62%)",
         PastelBlue: "hsl(228, 100%, 84%)",
         LightBlue: "hsl(206, 94%, 87%)",
         StrawberryRed:" hsl(354, 84%, 57%)",
         CoolGray: "hsl(231, 11%, 63%)",
         LightGray:" hsl(229, 24%, 87%)",
         Magnolia:" hsl(217, 100%, 97%)",
         Alabaster:" hsl(231, 100%, 99%)",
         White: "hsl(0, 0%, 100%)",
      },
      backgroundImage:{
        desktopImg:"url(assets/images/bg-sidebar-desktop.svg)",
        mobileImg:"url(assets/images/bg-sidebar-mobile.svg);"
      },
      fontFamily: {
        myFont: ['Montserrat' , 'sans-serif']
      },
      image:{
        advanced:"url(/assets/images/icon-advanced.svg)",
        arcade:"url(/assets/images/icon-arcade.svg)",
        pro:"url(/assets/images/icon-pro.svg)",
        thanks:"url(/assets/images/icon-thank-you.svg)",
        advanced:"url(/assets/images/icon-advanced.svg)",
      },
      boxShadow:{
        myShadow:"-1px -1px 10px hsla(213, 96%, 18%, 0.2)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
