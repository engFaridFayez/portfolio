<script setup>
import { nextTick, ref } from "vue";
import emailjs from "@emailjs/browser";
import Button from "@/components/UI/Button.vue";
import Icon from "@/components/UI/Icon.vue";
import Input from "@/components/UI/Input.vue";
import { portfolioConfig } from "@/config";

const form = ref(null);
const currentTime = ref("");
const isSubmitting = ref(false);
const status = ref("idle");
const statusMessage = ref("");

const socialLinks = [
  { name: "GitHub", icon: "github", href: "https://github.com/engFaridFayez" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/farid-faiz-9b92a9354/" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/farid.faiz/" },
  { name: "X / Twitter", icon: "x", href: "https://x.com/faridfayez123" },
];

async function sendEmail() {
  if (isSubmitting.value || !form.value?.reportValidity()) return;
  isSubmitting.value = true;
  status.value = "sending";
  statusMessage.value = "Sending your message…";
  currentTime.value = new Date().toLocaleString();

  try {
    await nextTick();
    const { serviceId, templateId, publicKey } = portfolioConfig.emailjs;
    await emailjs.sendForm(serviceId, templateId, form.value, { publicKey });
    status.value = "success";
    statusMessage.value = "Thank you. Your message has been sent successfully.";
    form.value.reset();
  } catch {
    status.value = "error";
    statusMessage.value = "Your message couldn’t be sent. Please try again, or reach out on LinkedIn.";
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <section id="contact" class="section contact-section" aria-labelledby="contact-title">
    <div class="container contact-layout">
      <div class="contact-intro">
        <p class="eyebrow">Let’s connect</p>
        <h2 id="contact-title">Have something<br /><em>in mind?</em></h2>
        <p class="contact-copy">
          A project to build. A problem to solve. A role to discuss.
          Tell me a little about it, and let’s see what we can create together.
        </p>
        <div class="social-block">
          <p class="social-heading">Find me elsewhere</p>
          <ul class="social-list" aria-label="Social profiles">
            <li v-for="social in socialLinks" :key="social.name">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                :aria-label="`${social.name} profile (opens in a new tab)`"
              >
                <Icon :name="social.icon" aria-hidden="true" />
                <span>{{ social.name }}</span>
                <Icon name="arrow-up-right" class="social-arrow" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="contact-panel">
        <div class="form-heading">
          <span class="form-symbol" aria-hidden="true"><Icon name="mail" /></span>
          <div>
            <h3>Start a conversation.</h3>
            <p>All fields are required.</p>
          </div>
        </div>
        <form ref="form" class="contact-form" :aria-busy="isSubmitting" @submit.prevent="sendEmail">
          <input type="hidden" name="time" :value="currentTime" />
          <div class="field-row">
            <Input
              id="contact-name" name="name" label="Your name"
              placeholder="Full name" autocomplete="name"
              :maxlength="120" :readonly="isSubmitting"
            />
            <Input
              id="contact-email" name="user_email" label="Email address" type="email"
              placeholder="you@example.com" autocomplete="email"
              :maxlength="254" :readonly="isSubmitting"
            />
          </div>
          <Input
            id="contact-message" name="message" label="What can we build together?"
            type="textarea" placeholder="A little about your project, idea, or opportunity…"
            :rows="5" :maxlength="6000" :readonly="isSubmitting"
          />
          <div class="form-actions">
            <Button
              type="submit" :label="isSubmitting ? 'Sending…' : 'Send message'"
              :disabled="isSubmitting" class="send-button"
            >
              <span>{{ isSubmitting ? "Sending…" : "Send message" }}</span>
              <Icon
                :name="isSubmitting ? 'loader' : 'arrow-up-right'"
                :class="{ 'sending-icon': isSubmitting }" aria-hidden="true"
              />
            </Button>
          </div>
          <div class="status-region" aria-live="polite" aria-atomic="true">
            <p v-if="statusMessage" class="form-status" :class="`is-${status}`">
              <Icon v-if="status === 'success'" name="check" aria-hidden="true" />
              <span>{{ statusMessage }}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section { border-top: 1px solid var(--line); }
.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.12fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}
.contact-intro { padding-top: 0.5rem; }
.contact-intro h2 {
  margin: 1.6rem 0 1.7rem;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: clamp(2.7rem, 4.7vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 1.06;
}
.contact-intro h2 em {
  color: var(--accent);
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: -0.045em;
}
.contact-copy {
  max-width: 24rem;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.85;
}
.social-block { margin-top: 3rem; max-width: 25rem; }
.social-heading {
  margin: 0 0 1rem;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.social-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 1.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.social-link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 3.35rem;
  border-bottom: 1px solid var(--line);
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 180ms ease, border-color 180ms ease;
}
.social-link > svg { width: 1rem; height: 1rem; flex: 0 0 auto; }
.social-link .social-arrow {
  width: 0.9rem;
  height: 0.9rem;
  margin-left: auto;
  color: var(--muted);
  transition: transform 180ms ease;
}
.social-link:hover { border-color: var(--accent); color: var(--accent); }
.social-link:hover .social-arrow { transform: translate(2px, -2px); color: var(--accent); }
.social-link:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.contact-panel {
  padding: clamp(1.5rem, 3.2vw, 2.65rem);
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}
.form-heading { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
.form-symbol {
  display: grid;
  place-items: center;
  width: 2.9rem;
  height: 2.9rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
}
.form-symbol svg { width: 1.2rem; height: 1.2rem; }
.form-heading h3 {
  margin: 0 0 0.3rem;
  color: var(--text);
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.4;
}
.form-heading p { margin: 0; color: var(--muted); font-size: 0.75rem; line-height: 1.5; }
.contact-form { display: grid; gap: 1.4rem; }
.field-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.form-actions { display: flex; margin-top: 0.15rem; }
.send-button { width: 100%; justify-content: space-between; }
.send-button > svg { width: 1.1rem; height: 1.1rem; }
.status-region { margin-top: -1.4rem; }
.form-status {
  display: flex;
  align-items: start;
  gap: 0.5rem;
  margin: 0;
  padding-top: 1.4rem;
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.65;
}
.form-status > svg { width: 1rem; height: 1rem; flex: 0 0 auto; margin-top: 0.15rem; }
.form-status.is-success { color: var(--success); }
.form-status.is-error { color: var(--error); }
.sending-icon { animation: sending 1.1s linear infinite; }
@keyframes sending { to { transform: rotate(360deg); } }
@media (max-width: 800px) {
  .contact-layout { grid-template-columns: 1fr; gap: 2.75rem; }
  .contact-intro h2 { font-size: clamp(2.8rem, 7.8vw, 4rem); }
  .contact-copy { max-width: 34rem; }
  .social-block { margin-top: 2rem; }
}
@media (max-width: 480px) {
  .field-row { grid-template-columns: 1fr; gap: 1.4rem; }
  .contact-panel { padding: 1.35rem; }
}
@media (prefers-reduced-motion: reduce) {
  .social-link, .social-link .social-arrow { transition: none; }
  .sending-icon { animation: none; }
}
</style>
