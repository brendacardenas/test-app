import { Component, OnInit, Input } from '@angular/core';
import { NgModule, Component, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Imovie } from '../movie';
import { Ipeople } from '../people';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  persons$: Ipeople[] = [];
  movies$: Imovie[] = [];



  constructor() { }

  ngOnInit() {
  }

}
