import express, { Application, Router } from "express";
import AuthController from "../controller/auth.controller";
export default class RouteUrl {
  private authController = new AuthController();
  constructor(router: Router) {
    try {
      router.post(
        "/user/register",
        this.authController.Register.bind(this.authController)
      );
    } catch (error) {
      console.log("error route", error);
    }
  }
}
