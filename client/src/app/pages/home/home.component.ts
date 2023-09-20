import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public testBlogIntro = `
    <h1>Introduction</h1>
    <p>Hello and welcome to my AI Mind Map Blog Portfolio! This space serves as a personal canvas where
        I explore the fascinating intersections of technology—from GPT and Natural Language Processing
        to Web Development using Angular, React, and more.</p>

    <h2>Who Is This For?</h2>
    <p>Whether you're a tech enthusiast, a seasoned developer, or someone simply curious about the
        digital world, there's something here for you.</p>

    <h2>What Will You Find?</h2>
    <p>Expect a medley of content, from in-depth tutorials and case studies of my projects to opinion
        pieces that ponder the future of AI and Mind Mapping.</p>

    <h2>Why Follow Along?</h2>

    <p>While I'm still figuring out what makes this blog truly unique, one thing is for sure: it's a
        journey worth taking if you're interested in the ever-evolving landscape of technology.</p>

    <h2>Disclaimer</h2>
    <p>Most of the content on this site will be AI-generated, leveraging the capabilities of GPT and
        other advanced technologies. Links to the original conversations that generated the content will
        be provided for educational purposes.</p>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}

// Sample content from server/src/blog/blog.controller.ts:
// <h1>Introduction</h1>
// <p>Hello and welcome to my AI Mind Map Blog Portfolio! This space serves as a personal canvas where
//     I explore the fascinating intersections of technology—from GPT and Natural Language Processing
//     to Web Development using Angular, React, and more.</p>

// <h2>Who Is This For?</h2>
// <p>Whether you're a tech enthusiast, a seasoned developer, or someone simply curious about the
//     digital world, there's something here for you.</p>

// <h2>What Will You Find?</h2>
// <p>Expect a medley of content, from in-depth tutorials and case studies of my projects to opinion
//     pieces that ponder the future of AI and Mind Mapping.</p>

// <h2>Why Follow Along?</h2>

// <p>While I'm still figuring out what makes this blog truly unique, one thing is for sure: it's a
//     journey worth taking if you're interested in the ever-evolving landscape of technology.</p>

// <h2>Disclaimer</h2>
// <p>Most of the content on this site will be AI-generated, leveraging the capabilities of GPT and
//     other advanced technologies. Links to the original conversations that generated the content will
//     be provided for educational purposes.</p>

