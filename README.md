# Projekt - Webbklient för CV/Portfolio
Detta är en del av projektearbetet i kursen Webbutveckling III DT173G.
Uppgiften går ut på att skapa en webbtjänst som har stöd för CRUD där endast en inloggad användare på admin-sidan kan hantera innehållet. Sidan ska sen presenteras på ett snyggt sätt på en sida som endast läser från webbtjänsten.

Dett är webbklienten för projektet. 

## Gulp
Denna sida är skapad med Gulp för att automatisera arbetsflödet. Sidan använder Sass som kompileras till CSS och TypeScript som kompileras till JavaScript med hjälp av gulp.

Ändrade filer förflyttas också automatiskt till publiceringsmapp. 

## Fetch API
Sidan använder Fetch API för att hämta innehållet från webbtjänsten.

## Vill du klona?
Skriv i din terminal kommandot:
git clone https://github.com/Ztawh/projekt-webb3-klient.git

För att gulp ska fungera behöver du ha Node.js och npm installerat på datorn.
Skriv sen gulp i terminalen så ska automatiseringen vara igång.

### Länkar
Länk till admin-sidan: [länk](https://studenter.miun.se/~amhv2000/writeable/projekt-admin/index.php)
Länk till webbtjänsten:[länk](https://studenter.miun.se/~amhv2000/writeable/pub-webbklient-projekt/)