import { Injectable } from "@angular/core"
import { TOASTER_DURATION } from "@app/utils/const/const"
import { ToastController, ToastOptions } from "@ionic/angular/standalone"

@Injectable()
export class Toaster {
    constructor(private toastController: ToastController) {}

    async success(
        message: string,
        duration: number = TOASTER_DURATION,
        options: ToastOptions = {}
    ) {
        const toast = await this.toastController.create({
            message: message,
            duration: duration,
            position: options.position,
            color: "success",
        })
        toast.present()
    }
    async error(
        message: string,
        duration: number = TOASTER_DURATION,
        position: ToastOptions["position"] = "bottom"
    ) {
        const toast = await this.toastController.create({
            message: message,
            duration: duration,
            position: position,
            color: "danger",
        })
        toast.present()
    }
    async warn(
        message: string,
        duration: number = TOASTER_DURATION,
        options: ToastOptions = {}
    ) {
        const toast = await this.toastController.create({
            message: message,
            duration: duration,
            position: options.position,
            color: "warning",
        })
        toast.present()
    }
}
