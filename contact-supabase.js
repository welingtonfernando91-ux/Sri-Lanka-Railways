// SUPABASE CONNECTION

const SUPABASE_URL = "https://jvvmuymindxrzqtjfgcw.supabase.co";

const SUPABASE_KEY = "sb_publishable_jNswy2V-CdkCJZ8RVJ9meQ_f2-CKwJ9";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// CONTACT FORM SUBMISSION

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("passengerName").value.trim();
    const email = document.getElementById("passengerEmail").value.trim();
    const subject = document.getElementById("passengerSubject").value.trim();
    const message = document.getElementById("passengerMessage").value.trim();

    const status = document.getElementById("contactStatus");
    const button = document.getElementById("sendMessageButton");

    button.disabled = true;
    button.textContent = "Sending...";

    status.textContent = "";

    const { error } = await supabaseClient
        .from("messages")
        .insert([
            {
                passenger_name: name,
                email: email,
                subject: subject,
                message: message
            }
        ]);

    if (error) {

        status.style.color = "red";
        status.textContent = "Message failed: " + error.message;

        button.disabled = false;
        button.textContent = "Send Message";

    } else {

        status.style.color = "green";
        status.textContent = "Your message has been sent successfully!";

        contactForm.reset();

        button.disabled = false;
        button.textContent = "Send Message";

    }

});