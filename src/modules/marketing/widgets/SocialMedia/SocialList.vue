<template>
    <section class="socialmedia">
      <h1>Social Media</h1>
      <div class="social-cards">
        <div class="social-card">
          <div class="social-heading">
            <img src="../../../../assets/instagram.png" alt="" />
            <p>Instagram</p>
          </div>
          <div class="social-icons">
            <div class="icon">
              <img src="../../../../assets/followers.png" alt="" />
              <p>24,648</p>
            </div>
            <div class="icon">
              <img src="../../../../assets/like.png" alt="" />
              <p>786</p>
            </div>
            <div class="icon">
              <img src="../../../../assets/following.png" alt="" />
              <p>786</p>
            </div>
          </div>
        </div>
        <div class="social-card">
          <div class="social-heading">
            <img src="../../../../assets/telegram.png" alt="" />
            <p>Telegram</p>
          </div>
          <div class="social-icons">
            <div class="icon">
              <img src="../../../../assets/followers.png" alt="" />
              <p>24,648</p>
            </div>
            <div class="icon">
              <img src="../../../../assets/comments.png" alt="" />
              <p>786</p>
            </div>
            <div class="icon">
              <img src="../../../../assets/following.png" alt="" />
              <p>786</p>
            </div>
          </div>
        </div>
        <div class="social-card">
          <div class="social-heading">
            <img src="../../../../assets/bot.png" alt="" />
            <p>Telegram Bot</p>
          </div>
          <div class="social-icons">
            <div class="icon">
              <img src="../../../../assets/followers.png" alt="" />
              <p>24,648</p>
            </div>
            <div class="icon">
              <img src="../../../../assets/views.png" alt="" />
              <p>786</p>
            </div>
            <div class="icon">
              <img src="../../../../assets/following.png" alt="" />
              <p>786</p>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar">
        <VCalendar class="calendar-v" transparent borderless /> 
      </div>
    </section>
  </template>
<script setup>
import "./style/social-media.css";
</script>  