import { i18n } from "i18next";

export const i18nAddResourceBundles = (i18n: i18n) => {
  i18n.addResourceBundle("en", "webpanel-comments", {
    delete_confirm_title: "Do you want to delete this item?",
    yes: "Yes",
    no: "No",
    comment_sent: "Your message has been sent",
    comment_sending_error: "There was an error when sending Your message",
    comment_placeholder: "Comment's text",
    comments_card_title: "Comments",
  });
  i18n.addResourceBundle("cs", "webpanel-comments", {
    delete_confirm_title: "Opravdu chcete smazat tuto položku?",
    yes: "Ano",
    no: "Ne",
    comment_sent: "Vaše zpráva byla úspěšně odeslána",
    comment_sending_error: "Během odesílání došlo k chybě",
    comment_placeholder: "Text komentáře",
    comments_card_title: "Komentáře",
  });
};
