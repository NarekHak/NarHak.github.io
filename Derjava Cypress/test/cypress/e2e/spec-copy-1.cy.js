/// <reference types="cypress" />

describe("Derjava Cypress", () => {
  it("Home Page", () => {
    cy.visit("https://derjavas.am/");
    const imageUrl =
      "https://derjavas.am/wp-content/uploads/2023/11/DERJAVA-cover-photo-web.png";
    cy.get('img[src="' + imageUrl + '"]').should("exist");
    cy.contains("span", "Դերժավա Ընկերությունների Խումբ");
    cy.contains("span", "Սպառողի լավագույն ընտրությունը");
    cy.contains(
      "p",
      "Դերժավա ընկերությունների խումբն ունի 28 տարվա պատմություն (հիմնադրվել է 1995թ.)"
    );
    cy.contains("p", "Ունի ավելի քան 2500 աշխատակից");
    cy.contains(
      "p",
      "Ներմուծում է 40 անուն համաշխարհային ճանաչում ունեցող ապրանքանիշեր «արագ սպառվող ապրանքների շուկայում» (FMCG)"
    );
    cy.contains(
      "p",
      "Զարգացնում է տեղական գործունեության մի շարք ոլորտներ՝ ներառյալ հյուրանոցային Աբիզնես և բուժսպասարկում"
    );
    cy.contains("p", " Իրականացնում է միջազգային բեռնափոխադրումներ");
    cy.contains("p", "Մի շարք լյուքս դասի ավտոմեքենաների ներմուծող է");
    cy.get(".video-shortcode").should("exist");

    const aboutUsText = "ՄԵՐ ՄԱՍԻՆ";
    cy.get("nav").contains(aboutUsText).click({ force: true });

    cy.location("pathname").should("equal", "/about-us/");
    

    //About US Page testing

    cy.contains("span", "Մեր մասին");
    cy.contains("p", "Մենք");

    cy.contains("p", " Առաջատար ենք դիստրիբյուցիայի ոլորտում");
    cy.contains(
      "p",
      "Համալրում ենք հայկական շուկան համաշխարհային ճանաչում ունեցող բրենդներով"
    );
    cy.contains("p", "Մատուցում ենք բարձրորակ ծառայություն հայ սպառողին");
    cy.contains(
      "p",
      "Հավատարիմ գործընկեր ենք թե՛ ներքին, թե՛ արտաքին գործընկերների համար"
    );
    cy.contains("p", "Ավելացնում ենք աշխատատեղեր");
    cy.contains(
      "p",
      "Բարելավում ենք մարդկանց կյանքի որակը՝ մեր յուրաքանչյուր նոր նախագծի հաջողությամբ"
    );

    cy.contains("span", "Մեր արժեքները");
    cy.contains("p", "ՄԱՐԴ");
    cy.contains(
      "p",
      "Մեր հզոր մեխանիզմն աշխատացնում է ՄԱՐԴ-ը՝ իր հմտություններով, փորձով ու դրական էներգիայով: Այստեղ մարդն իր գործի տերն է, կիսում է իր փորձը և միշտ լսելի է:"
    );
    cy.contains("p", "ՀԵՂԻՆԱԿՈՒԹՅՈՒՆ");
    cy.contains(
      "p",
      "Մեր երկրում և երկրից դուրս այնքան շատ արժեքավոր ձեռքբերումներ ունենք, որ դրանք պահպանելու համար ոչ մի վայրկյան կանգ չենք առնում մարտահրավերների առաջ: Մեր յուրաքանչյուր հաջողությունից ոչ միայն ուրախանում ենք, այլև պարտավորվում ենք հաջորդը չուշացնել:"
    );
    cy.contains("p", "ՎՍՏԱՀՈՒԹՅՈՒՆ ");
    cy.contains(
      "p",
      "Մեզ համար կարևոր է վստահությունը թե՛ միմյանց, թե՛ մեր գործընկերների հանդեպ:"
    );

    const AboutUSUrl = "https://derjavas.am/wp-content/uploads/2022/05/5.png";
    cy.get('img[src="' + AboutUSUrl + '"]').should("exist");

    cy.contains(
      "p",
      "Հաջողությունը ծնվում է պատասխանատու աշխատանքի և ինքնակատարելագործման միջոցով։ Այդ ճանապարհին փնտրում ենք և գտնում համոզիչ, բայց երբեմն ռիսկային բիզնես լուծումներ: Սակայն ամեն փորձ իր հետ բերում է նոր գիտելիք և ամրապնդում նոր բարձունքներ նվաճելու մեր հնարավորությունները։"
    );
    cy.contains("span", "Անկախ Աուդիտորական եզրակացություններ");

    // const IndependentAuditReport =
    //   "Դերժավա-Ս ՓԲԸ 2021 թ. Անկախ Աուդիտորական եզրակացություն";
    // cy.get("p").contains(IndependentAuditReport).click({ force: true });
    cy.visit("https://derjavas.am/work-with-derjava/");
    cy.contains("span", "Մեր թափուր հաստիքներն են՝");

    cy.contains(
      "p",
      "Բացառիկ հնարավորություն միանալու մեր թիմին՝ համալրելով որակյալ, պրոֆեսիոնալ և հեռանկարային հնարավորություններ ունեցող թափուր հաստիքները:"
    );
    cy.contains("p", "Խնդրում ենք ձեր ինքնակենսագրականն ուղարկել հետևյալ");
    const mailTo = "hr@derjavas.am";
    cy.get("p").contains(mailTo).should("exist");
    cy.contains(
      "span",
      "Եթե ցանկանում եք համալրել մեզ մոտ ապագայում աշխատանքի "
    );
    cy.contains(
      "span",
      "հնարավոր պահուստային ֆոնդը, խնդրում ենք լրացնել հետևյալ ձևը՝"
    );
    cy.get('input[name="your-name"]').type("Narek", { force: true });

    cy.get("[name=your-surname]").type("Hakobyan", { force: true });
    cy.get("[name=Section]").type("Marketing", { force: true });

    cy.get("[name=your-email]").type("marketingderjava@gmail.com", {
      force: true,
    });
    cy.get("[name=your-message]").type(
      "Դիմում եմ աշխատանքի հայտարարության համար",
      { force: true }
    );
    cy.get(".derjava_work_upload_btn_lb").trigger("dragstart", {
      dataTransfer: { files: ["my-cv.pdf"] },
    });
    cy.contains(
      "ul",
      " Պահանջվում է պահեստի բանվոր։ Լրացուցիչ տեղեկությունների համար խնդրում ենք ձեր ինքնակենսագրականն ուղարկել հետևյալ"
    );
    cy.get("li").contains(mailTo).should("exist");
    cy.contains("h2", "Թափուր Աշխատատեղեր");
  });
});
