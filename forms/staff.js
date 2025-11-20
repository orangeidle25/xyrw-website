    const form = document.getElementById("applicationForm");
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      
      // duplicate sub.
      const submitButton = form.querySelector("button[type='submit']");
      submitButton.disabled = true;
      submitButton.innerText = "Submitting...";

      // gather data
      const formData = new FormData(form);
      let data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
    const part1 = "https://discord.com/";
    const part2 = "api/";
    const part3 = "webhooks/";
    const part4 = "1441141891788837075/";
    const part5 = "vxtexe1qcVf8pvmdxw4cNOIOva_cZH_jetyI-3ADx3b4GkV2eZDE-DuVV-3hw7d5uKNH";

    const discordWebhookURL = part1 + part2 + part3 + part4 + part5;
      const discordPayload = {
        content: "A new moderator application has been submitted!",
        embeds: [
          {
            title: "New Moderator Application",
            color: 5814783,
            fields: [
              { name: "Roblox Username", value: data.robloxUsername || "N/A", inline: true },
              { name: "Discord Username", value: data.discordUsername || "N/A", inline: true },
              { name: "Age", value: data.age || "N/A", inline: true },
              { name: "Timezone", value: data.tmz || "N/A", inline: true },
              { name: "The user's motivation to be moderator", value: data.motivation || "N/A" },
              { name: "The user's experience with moderation", value: data.experience || "N/A" },
              { name: "When is the user available to moderate. (Week timeline)", value: data.availability || "N/A", inline: true },
              { name: "English level of user", value: data.english || "N/A", inline: true },
              { name: "Additional Comments by the user", value: data.additionalComments || "N/A" }
            ],
            timestamp: new Date().toISOString()
          }
        ]
      };
  
      try {
        await fetch(discordWebhookURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordPayload)
        });
        window.location.href = "completed.html";
      } catch (error) {
        console.error('Submission Error:', error);
        alert("There was an error submitting your application. Please try again.");
      } finally {
        submitButton.disabled = false;
        submitButton.innerText = "Submit Application";
      }
    });

