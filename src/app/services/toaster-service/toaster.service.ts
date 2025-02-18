// services/toast.service.ts
import { Injectable } from "@angular/core"
import { TOASTER_DURATION } from "@app/utils/const/const"
import { ToastController } from "@ionic/angular"

export type ToasterPosition = "top" | "bottom" | "middle" | undefined
export interface ToasterConfig {
    duration: number
    position: ToasterPosition
    color: string
    buttons: []
}

@Injectable({
    providedIn: "root",
})
export class ToastService {
    constructor(private toastController: ToastController) {}

    // Configuration par défaut du toast
    private defaultConfig: ToasterConfig = {
        duration: TOASTER_DURATION,
        position: "bottom",
        color: "primary",
        buttons: [],
    }

    /**
     * Affiche un toast avec les options par défaut
     */
    async showToast(message: string, options: Partial<ToasterConfig> = {}) {
        const toast = await this.toastController.create({
            ...this.defaultConfig,
            ...options,
            message,
        })

        await toast.present()
        return toast
    }

    /**
     * Toast de succès
     */
    async success(message: string, options: Partial<ToasterConfig> = {}) {
        return this.showToast(message, {
            ...options,
            color: "success",
            duration: TOASTER_DURATION,
        })
    }

    /**
     * Toast d'erreur
     */
    async error(message: string, options: Partial<ToasterConfig> = {}) {
        return this.showToast(message, {
            ...options,
            color: "danger",
            duration: TOASTER_DURATION,
            position: "top",
        })
    }

    /**
     * Toast d'avertissement
     */
    async warning(message: string, options: Partial<ToasterConfig> = {}) {
        return this.showToast(message, {
            ...options,
            color: "warning",
            duration: TOASTER_DURATION,
        })
    }

    /**
     * Toast persistant (ne se ferme pas automatiquement)
     */
    async persistent(message: string, options: Partial<ToasterConfig> = {}) {
        return this.showToast(message, {
            ...options,
            duration: 0,
        })
    }
}
