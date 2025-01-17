/*
 *  Copyright 2015-2023 Felix Garcia Carballeira, Alejandro Calderon Mateos, Javier Prieto Cepeda, Saul Alonso Monsalve
 *
 *  This file is part of WepSIM.
 *
 *  WepSIM is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WepSIM is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with WepSIM.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


    i18n.eltos.hw.fr = {

        "Component":                                "Composant",
        "Element":                                  "Élément",
        "States (In)":                              "États (In)",
        "States (Out)":                             "États (Out)",
        "Signals":                                  "Signaux",
        "It has":                                   "Il a",
        "inputs":                                   "entrées",
        "outputs":                                  "sorties",
        "signals":                                  "signaux",

	"Graph":					"Graphique",
	"Text":						"Texte",
	"Graph: split view":				"Graphique : vue fractionnée",
	"Graph: interactive mode":			"Graphique : mode interactif",
	"name":						"Nom",
	"version":					"version",
	"abilities":					"capacités",
	"value":					"valeur",
	"default_value":				"valeur par défaut",
	"nbits":					"nbits",
	"type":						"taper",
	"visible":					"visible", 

	"EP:CPU_T1:STATES:IN":				"L'entrée est la valeur du registre MBR",
	"EP:CPU_T1:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T1:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T2:STATES:IN":				"L'entrée est la valeur du registre PC",
	"EP:CPU_T2:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T2:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T3:STATES:IN":				"L'entrée est la sortie du sélecteur-IR",
	"EP:CPU_T3:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T3:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T4:STATES:IN":				"L'entrée est la valeur du registre RT1",
	"EP:CPU_T4:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T4:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T5:STATES:IN":				"L'entrée est la valeur du registre RT2",
	"EP:CPU_T5:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T5:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T6:STATES:IN":				"L'entrée est la sortie ALU",
	"EP:CPU_T6:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T6:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_T7:STATES:IN":				"L'entrée est la valeur du registre RT3",
	"EP:CPU_T7:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T7:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_T8:STATES:IN":				"L'entrée est la valeur du registre SR",
	"EP:CPU_T8:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T8:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_T9:STATES:IN":				"L'entrée est la valeur de la sortie du port A du fichier de registre",
	"EP:CPU_T9:STATES:OUT":				"La sortie va au bus interne",
	"EP:CPU_T9:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T10:STATES:IN":				"L'entrée est la valeur de la sortie du port B du fichier de registre",
	"EP:CPU_T10:STATES:OUT":			"La sortie va au bus interne",
	"EP:CPU_T10:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée vers la sortie",
	"EP:CPU_T11:STATES:IN":				"L'entrée est la sortie de la micro-instruction/ExCode",
	"EP:CPU_T11:STATES:OUT":			"La sortie va au bus interne",
	"EP:CPU_T11:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_T12:STATES:IN":				"L'entrée est la sortie HPC (compteur de performance matérielle)",
	"EP:CPU_T12:STATES:OUT":			"La sortie va au bus interne",
	"EP:CPU_T12:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_TA:STATES:IN":				"L'entrée est la sortie du registre MAR",
	"EP:CPU_TA:STATES:OUT":				"La sortie va au bus d'adresse",
	"EP:CPU_TA:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_TB:STATES:IN":				"L'entrée est la sortie du sélecteur d'octets",
	"EP:CPU_TB:STATES:OUT":				"La sortie va au bus de données",
	"EP:CPU_TB:SIGNALS:CTL":			"Confirmez que la valeur d'entrée est copiée dans la sortie",
	"EP:CPU_MUX_A:STATES:MUX_0":			"Entrée 0 du MUX A, à partir du fichier de registre (A)",
	"EP:CPU_MUX_A:STATES:MUX_1":			"Entrée 1 du MUX A, du registre RT1",
	"EP:CPU_MUX_A:STATES:MUX_O":			"Sortie vers ALU, opérateur 0",
	"EP:CPU_MUX_A:SIGNALS:MA":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CPU_MUX_B:STATES:MUX_0":			"Entrée 0 du MUX B, à partir du fichier de registre (B)",
	"EP:CPU_MUX_B:STATES:MUX_1":			"Entrée 1 du MUX B, du registre RT2",
	"EP:CPU_MUX_B:STATES:MUX_2":			"Entrée 2 du MUX B, valeur 4",
	"EP:CPU_MUX_B:STATES:MUX_3":			"Entrée 3 du MUX B, valeur 1",
	"EP:CPU_MUX_B:STATES:MUX_O":			"Sortie vers ALU, opérateur 1",
	"EP:CPU_MUX_B:SIGNALS:MB":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CPU_MUX_1:STATES:MUX_0":			"Entrée 0 du MUX 1, du bus interne",
	"EP:CPU_MUX_1:STATES:MUX_1":			"Entrée 1 du MUX 1, du sélecteur d'octet",
	"EP:CPU_MUX_1:STATES:MUX_O":			"Sortie vers MBR, à partir du MUX 1",
	"EP:CPU_MUX_1:SIGNALS:M1":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CPU_MUX_2:STATES:MUX_0":			"Entrée 0 du MUX 2, du bus interne",
	"EP:CPU_MUX_2:STATES:MUX_1":			"Entrée 1 de MUX 2, PC + 4",
	"EP:CPU_MUX_2:STATES:MUX_O":			"Sortie vers PC",
	"EP:CPU_MUX_2:SIGNALS:M2":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CPU_MUX_7:STATES:MUX_0":			"Entrée 0 du MUX 7, du bus interne",
	"EP:CPU_MUX_7:STATES:MUX_1":			"Entrée 1 du MUX 7, du sélecteur de drapeau",
	"EP:CPU_MUX_7:STATES:MUX_O":			"Sortie pour enregistrer SR",
	"EP:CPU_MUX_7:SIGNALS:M7":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CU_MUX_A:STATES:MUX_0":			"Entrée 0 du MUX A, de microADDR + 1",
	"EP:CU_MUX_A:STATES:MUX_1":			"Entrée 1 du MUX A, de co2maddr",
	"EP:CU_MUX_A:STATES:MUX_2":			"Entrée 2 du MUX A, du microIR/MADDR",
	"EP:CU_MUX_A:STATES:MUX_3":			"Entrée 3 du MUX A, à partir de 0",
	"EP:CU_MUX_A:STATES:MUX_O":			"Sortie vers microADDR, du MUX A",
	"EP:CU_MUX_A:SIGNALS:A0":			"mIR/A0",
	"EP:CU_MUX_A:SIGNALS:A1":			"Sortie de l'unité de contrôle MUX B",
	"EP:CU_MUX_B:STATES:MUX_0":			"Entrée 0 du MUX B, du MUX C",
	"EP:CU_MUX_B:STATES:MUX_1":			"Entrée 1 du MUX B, de NOT (MUX C)",
	"EP:CU_MUX_B:STATES:MUX_O":			"Sortie vers MUX A/A1",
	"EP:CU_MUX_B:SIGNALS:MB":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CU_MUX_C:STATES:MUX_0":			"Entrée 0 du MUX C, à partir de 0",
	"EP:CU_MUX_C:STATES:MUX_1":			"Entrée 1 du MUX C, de INT",
	"EP:CU_MUX_C:STATES:MUX_2":			"Entrée 2 du MUX C, de IORdy",
	"EP:CU_MUX_C:STATES:MUX_3":			"Entrée 3 du MUX C, de MRdy",
	"EP:CU_MUX_C:STATES:MUX_4":			"Entrée 4 du MUX C, de SR/U",
	"EP:CU_MUX_C:STATES:MUX_5":			"Entrée 5 du MUX C, de SR/I",
	"EP:CU_MUX_C:STATES:MUX_6":			"Entrée 6 du MUX C, de SR/Z",
	"EP:CU_MUX_C:STATES:MUX_7":			"Entrée 7 du MUX C, de SR/N",
	"EP:CU_MUX_C:STATES:MUX_8":			"Entrée 8 du MUX C, de SR/V",
	"EP:CU_MUX_C:STATES:MUX_9":			"Entrée 9 du MUX C, de SR/C",
	"EP:CU_MUX_C:STATES:MUX_10":			"Entrée 10 du MUX C, depuis InEx",
	"EP:CU_MUX_C:STATES:MUX_O":			"Sortie vers MUX B",
	"EP:CU_MUX_C:SIGNALS:CTL":			"Sortie de l'unité de contrôle MUX C",
	"EP:CU_MUX_RA:STATES:MUX_0":			"Entrée 0 du MUX MR, de IR[SelA+0...SelA+4]",
	"EP:CU_MUX_RA:STATES:MUX_1":			"Entrée 1 du MUX MR, de SelA",
	"EP:CU_MUX_RA:STATES:MUX_O":			"Sortie vers RA",
	"EP:CU_MUX_RA:SIGNALS:CTL":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CU_MUX_RB:STATES:MUX_0":			"Entrée 0 du MUX MR, de IR[SelB+0...SelB+4]",
	"EP:CU_MUX_RB:STATES:MUX_1":			"Entrée 1 du MUX MR, de SelB",
	"EP:CU_MUX_RB:STATES:MUX_O":			"Sortie vers RB",
	"EP:CU_MUX_RB:SIGNALS:MR":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CU_MUX_RC:STATES:MUX_0":			"Entrée 0 du MUX MR, de IR[SelC+0...SelC+4]",
	"EP:CU_MUX_RC:STATES:MUX_1":			"Entrée 1 du MUX MR, de SelC",
	"EP:CU_MUX_RC:STATES:MUX_O":			"Sortie vers RC",
	"EP:CU_MUX_RC:SIGNALS:MR":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:CU_MUX_MC:STATES:MUX_0":			"Entrée 0 du MUX MC, de IR3...IR0",
	"EP:CU_MUX_MC:STATES:MUX_1":			"Entrée 1 du MUX MC, de SelCop",
	"EP:CU_MUX_MC:STATES:MUX_O":			"Sortie vers COP",
	"EP:CU_MUX_MC:SIGNALS:CTL":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
        "EP:CPU_MUX_H:STATES:MUX_0":		"Entrée 0 du MUX H, du compteur de performances matérielles",
        "EP:CPU_MUX_H:STATES:MUX_1":		"Entrée 1 du MUX H, du compteur de performances matérielles",
        "EP:CPU_MUX_H:STATES:MUX_2":		"Entrée 2 du MUX H, du compteur de performances matérielles",
        "EP:CPU_MUX_H:STATES:MUX_3":		"Entrée 3 du MUX H, du compteur de performances matérielles",
        "EP:CPU_MUX_H:STATES:MUX_O":		"Sortie vers T12",
	"EP:CPU_MUX_H:SIGNALS:MH":		"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:MAR:STATES:IN":				"L'entrée est le bus interne",
	"EP:MAR:STATES:OUT":				"La sortie va au tristate Ta",
	"EP:MAR:SIGNALS:C0":				"Confirmez que l'entrée est stockée",
	"EP:MBR:STATES:IN":				"L'entrée est la sortie M1",
	"EP:MBR:STATES:OUT":				"La sortie va au tristate T1",
	"EP:MBR:SIGNALS:C1":				"Confirmez que l'entrée est stockée",
	"EP:PC:STATES:IN":				"L'entrée est la sortie M2",
	"EP:PC:STATES:OUT":				"La sortie va au tristate T2",
	"EP:PC:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"EP:IR:STATES:IN":				"L'entrée est le bus interne",
	"EP:IR:STATES:OUT":				"La sortie va au sélecteur IR et à la CU",
	"EP:IR:SIGNALS:C3":				"Confirmez que l'entrée est stockée",
	"EP:RT1:STATES:IN":				"L'entrée est le bus interne",
	"EP:RT1:STATES:OUT":				"La sortie va au tristate T4",
	"EP:RT1:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"EP:RT2:STATES:IN":				"L'entrée est le bus interne",
	"EP:RT2:STATES:OUT":				"La sortie va au tristate T5",
	"EP:RT2:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"EP:RT3:STATES:IN":				"L'entrée est la sortie de l'ALU",
	"EP:RT3:STATES:OUT":				"La sortie va au tristate T7",
	"EP:RT3:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"EP:SR:STATES:IN":				"L'entrée est la sortie du M7",
	"EP:SR:STATES:OUT":				"La sortie va à l'entrée T8 et à la CU",
	"EP:SR:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"EP:REGISTER_FILE:STATES:A":			"Sortie de RF vers T9 et MA/0",
	"EP:REGISTER_FILE:STATES:B":			"Sortie de RF vers T10 et MB/0",
	"EP:REGISTER_FILE:STATES:C":			"Entrée vers RF à partir du bus interne",
	"EP:REGISTER_FILE:SIGNALS:RA":			"Sélectionnez le registre dont la valeur est envoyée à A",
	"EP:REGISTER_FILE:SIGNALS:RB":			"Sélectionnez le registre dont la valeur est envoyée à B",
	"EP:REGISTER_FILE:SIGNALS:RC":			"Sélectionnez le registre où la valeur de C est stockée",
	"EP:REGISTER_FILE:SIGNALS:LC":			"Confirmez que RC va être mis à jour",
	"EP:CPU_ALU:STATES:A":				"Sortie du multiplexeur MUX A",
	"EP:CPU_ALU:STATES:B":				"Sortie du multiplexeur MUX B",
	"EP:CPU_ALU:STATES:ALU":			"Le résultat va à l'entrée de T6 et RT3",
	"EP:CPU_ALU:STATES:FLAGS":			"Mises à jour des drapeaux C,V,N,Z",
	"EP:CPU_ALU:SIGNALS:COP":			"Code opération (+, -, *, ...)",
	"EP:SELECT_SR:STATES:MUX_1":			"Entrée 1 de SELECT-SR, drapeau U",
	"EP:SELECT_SR:STATES:MUX_2":			"Entrée 2 de SELECT-SR, je flag",
	"EP:SELECT_SR:STATES:MUX_3":			"Entrée 3 de SELECT-SR, flags C V N Z",
	"EP:SELECT_SR:STATES:MUX_O":			"Sortie vers MUX 7/1",
	"EP:SELECT_SR:SIGNALS:SELP":			"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"EP:SELECT_IR:STATES:MUX_I":			"Entrée de SELECT-IR depuis IR",
	"EP:SELECT_IR:STATES:MUX_O":			"Sortie vers le bus interne via T3",
	"EP:SELECT_IR:SIGNALS:SE":			"Signer l'extension",
	"EP:SELECT_IR:SIGNALS:SIZE":			"Taille",
	"EP:SELECT_IR:SIGNALS:OFFSET":			"Décalage",
	"EP:BYTE_SELECTOR:STATES:FROM_MBR":		"Entrée du registre MBR",
	"EP:BYTE_SELECTOR:STATES:FROM_DATA":		"Entrée du bus de données",
	"EP:BYTE_SELECTOR:STATES:BE":			"Sortie vers BE",
	"EP:BYTE_SELECTOR:STATES:TO_MBR":		"Sortie vers M1/1",
	"EP:BYTE_SELECTOR:STATES:TO_TD":		"Sortie vers Td/entrée",
	"EP:BYTE_SELECTOR:SIGNALS:W":			"Écrire dans la mémoire principale",
	"EP:BYTE_SELECTOR:SIGNALS:SE":			"Signer l'extension",
	"EP:BYTE_SELECTOR:SIGNALS:A1A0":		"A1A0",
	"EP:BYTE_SELECTOR:SIGNALS:BW":			"Nombre d'octets à emballer",
	"EP:MEMORY:STATES:ADDR":			"Bus d'adresses",
	"EP:MEMORY:STATES:DATA":			"Bus de données",
	"EP:MEMORY:STATES:MRDY":			"Mémoire prête",
	"EP:MEMORY:SIGNALS:BE":				"BW+A1A0",
	"EP:MEMORY:SIGNALS:R":				"Lire",
	"EP:MEMORY:SIGNALS:W":				"Ecrire",
	"EP:IO:STATES:ADDR":				"Bus d'adresses",
	"EP:IO:STATES:DATA":				"Bus de données",
	"EP:IO:SIGNALS:IOR":				"Lire depuis le périphérique IO",
	"EP:IO:SIGNALS:IOW":				"Écrire dans le périphérique IO",
	"EP:KEYBOARD:STATES:ADDR":			"Bus d'adresses",
	"EP:KEYBOARD:STATES:DATA":			"Bus de données",
	"EP:KEYBOARD:SIGNALS:IOR":			"Lire depuis le clavier",
	"EP:DISPLAY:STATES:ADDR":			"Bus d'adresses",
	"EP:DISPLAY:STATES:DATA":			"Bus de données",
	"EP:DISPLAY:SIGNALS:IOR":			"Lire à partir de l'affichage (désactivé)",
	"EP:DISPLAY:SIGNALS:IOW":			"Écrire dans l'écran",
	"EP:L3D:STATES:ADDR":				"Bus d'adresses",
	"EP:L3D:STATES:DATA":				"Bus de données",
	"EP:L3D:SIGNALS:IOR":				"Lire depuis L3D",
	"EP:L3D:SIGNALS:IOW":				"Écrire dans le L3D",
	"EP:LEDM:STATES:ADDR":				"Bus d'adresses",
	"EP:LEDM:STATES:DATA":				"Bus de données",
	"EP:LEDM:SIGNALS:IOR":				"Lire depuis LEDM",
	"EP:LEDM:SIGNALS:IOW":				"Écrire dans le LEDM",

	"POC:CPU_T1:STATES:IN":				"L'entrée est la valeur du registre MBR",
	"POC:CPU_T1:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T1:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T2:STATES:IN":				"L'entrée est la sortie du registre PC",
	"POC:CPU_T2:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T2:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T3:STATES:IN":				"L'entrée est le sélecteur de sortie du registre IR",
	"POC:CPU_T3:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T3:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T6:STATES:IN":				"L'entrée est la sortie ALU",
	"POC:CPU_T6:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T6:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T8:STATES:IN":				"L'entrée est la sortie du registre SR",
	"POC:CPU_T8:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T8:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T9:STATES:IN":				"L'entrée est la sortie sur le port A du fichier registre",
	"POC:CPU_T9:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T9:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T10:STATES:IN":				"L'entrée est la sortie sur le port B du fichier registre",
	"POC:CPU_T10:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T10:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_T11:STATES:IN":				"L'entrée est la sortie MIR/ExCode",
	"POC:CPU_T11:STATES:OUT":				"La sortie va au bus interne",
	"POC:CPU_T11:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_TA:STATES:IN":				"L'entrée est la sortie du registre MAR",
	"POC:CPU_TA:STATES:OUT":				"La sortie va au bus d'adresse",
	"POC:CPU_TA:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_TB:STATES:IN":				"L'entrée est la sortie du sélecteur d'octet",
	"POC:CPU_TB:STATES:OUT":				"La sortie va au bus de données",
	"POC:CPU_TB:SIGNALS:CTL":				"Confirmez que la sortie est connectée à l'entrée",
	"POC:CPU_MUX_A:STATES:MUX_0":				"Entrée 0 du MUX A, de RF/A",
	"POC:CPU_MUX_A:STATES:MUX_1":				"Entrée 1 du MUX A, du bus interne",
	"POC:CPU_MUX_A:STATES:MUX_O":				"Sortie vers ALU/0, depuis MUX A",
	"POC:CPU_MUX_A:SIGNALS:MA":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CPU_MUX_B:STATES:MUX_0":				"Entrée 0 du MUX B, de RF/B",
	"POC:CPU_MUX_B:STATES:MUX_1":				"Entrée 1 du MUX B, du PC",
	"POC:CPU_MUX_B:STATES:MUX_O":				"Sortie vers ALU/1, depuis MUX B",
	"POC:CPU_MUX_B:SIGNALS:MB":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CPU_MUX_1:STATES:MUX_0":				"Entrée 0 du MUX 1, du bus interne",
	"POC:CPU_MUX_1:STATES:MUX_1":				"Entrée 1 du MUX 1, du bus de données",
	"POC:CPU_MUX_1:STATES:MUX_O":				"Sortie vers MBR, à partir du MUX 1",
	"POC:CPU_MUX_1:SIGNALS:M1":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CPU_MUX_7:STATES:MUX_0":				"Entrée 0 du MUX 7, du bus interne",
	"POC:CPU_MUX_7:STATES:MUX_1":				"Entrée 1 du MUX 7, du sélecteur de drapeau",
	"POC:CPU_MUX_7:STATES:MUX_O":				"Sortie vers SR, à partir de MUX 7",
	"POC:CPU_MUX_7:SIGNALS:M7":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CU_MUX_A:STATES:MUX_0":				"Entrée 0 du MUX A, de mADDR + 1",
	"POC:CU_MUX_A:STATES:MUX_1":				"Entrée 1 du MUX A, de co2maddr",
	"POC:CU_MUX_A:STATES:MUX_2":				"Entrée 2 du MUX A, de mIR/MADDR",
	"POC:CU_MUX_A:STATES:MUX_3":				"Entrée 3 du MUX A, à partir de 0",
	"POC:CU_MUX_A:STATES:MUX_O":				"Sortie vers mADDR, du MUX A",
	"POC:CU_MUX_A:SIGNALS:A0":				"mIR/A0",
	"POC:CU_MUX_A:SIGNALS:A1":				"Sortie de l'unité de contrôle MUX B",
	"POC:CU_MUX_B:STATES:MUX_0":				"Entrée 0 du MUX B, du MUX C",
	"POC:CU_MUX_B:STATES:MUX_1":				"Entrée 1 du MUX B, de NOT (MUX C)",
	"POC:CU_MUX_B:STATES:MUX_O":				"Sortie vers MUX A/A1, depuis MUX B",
	"POC:CU_MUX_B:SIGNALS:MB":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CU_MUX_C:STATES:MUX_0":				"Entrée 0 du MUX C, à partir de 0",
	"POC:CU_MUX_C:STATES:MUX_1":				"Entrée 1 du MUX C, de INT",
	"POC:CU_MUX_C:STATES:MUX_2":				"Entrée 2 du MUX C, de IORdy",
	"POC:CU_MUX_C:STATES:MUX_3":				"Entrée 3 du MUX C, de MRdy",
	"POC:CU_MUX_C:STATES:MUX_4":				"Entrée 4 du MUX C, de SR/U",
	"POC:CU_MUX_C:STATES:MUX_5":				"Entrée 5 du MUX C, de SR/I",
	"POC:CU_MUX_C:STATES:MUX_6":				"Entrée 6 du MUX C, de SR/Z",
	"POC:CU_MUX_C:STATES:MUX_7":				"Entrée 7 du MUX C, de SR/N",
	"POC:CU_MUX_C:STATES:MUX_8":				"Entrée 8 du MUX C, de SR/V",
	"POC:CU_MUX_C:STATES:MUX_9":				"Entrée 9 du MUX C, de SR/C",
	"POC:CU_MUX_C:STATES:MUX_10":				"Entrée 10 du MUX C, depuis InEx",
	"POC:CU_MUX_C:STATES:MUX_O":				"Sortie vers MUX B",
	"POC:CU_MUX_C:SIGNALS:CTL":				"Sortie de l'unité de contrôle MUX C",
	"POC:CU_MUX_RA:STATES:MUX_0":				"Entrée 0 du MUX MR, de IR[SelA+0...SelA+4]",
	"POC:CU_MUX_RA:STATES:MUX_1":				"Entrée 1 du MUX MR, de SelA",
	"POC:CU_MUX_RA:STATES:MUX_O":				"Sortie vers RA",
	"POC:CU_MUX_RA:SIGNALS:CTL":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CU_MUX_RB:STATES:MUX_0":				"Entrée 0 du MUX MR, de IR[SelB+0...SelB+4]",
	"POC:CU_MUX_RB:STATES:MUX_1":				"Inpu t 1 du MUX MR, de SelB",
	"POC:CU_MUX_RB:STATES:MUX_O":				"Sortie vers RB",
	"POC:CU_MUX_RB:SIGNALS:MR":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CU_MUX_RC:STATES:MUX_0":				"Entrée 0 du MUX MR, de IR[SelC+0...SelC+4]",
	"POC:CU_MUX_RC:STATES:MUX_1":				"Entrée 1 du MUX MR, de SelC",
	"POC:CU_MUX_RC:STATES:MUX_O":				"Sortie vers RC",
	"POC:CU_MUX_RC:SIGNALS:MR":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:CU_MUX_MC:STATES:MUX_0":				"Entrée 0 du MUX MC, de IR3...IR0",
	"POC:CU_MUX_MC:STATES:MUX_1":				"Entrée 1 du MUX MC, de SelCop",
	"POC:CU_MUX_MC:STATES:MUX_O":				"Sortie vers COP",
	"POC:CU_MUX_MC:SIGNALS:CTL":				"Sélectionnez la valeur d'entrée à envoyer à la sortie",
	"POC:MAR:STATES:IN":				"L'entrée est le bus interne",
	"POC:MAR:STATES:OUT":				"La sortie va au tristate Ta",
	"POC:MAR:SIGNALS:C0":				"Confirmez que l'entrée est stockée",
	"POC:MBR:STATES:IN":				"L'entrée est la sortie M1",
	"POC:MBR:STATES:OUT":				"La sortie va au tristate T1",
	"POC:MBR:SIGNALS:C1":				"Confirmez que l'entrée est stockée",
	"POC:PC:STATES:IN":				"L'entrée est le bus interne",
	"POC:PC:STATES:OUT":				"La sortie va au tristate T2",
	"POC:PC:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"POC:IR:STATES:IN":				"L'entrée est le bus interne",
	"POC:IR:STATES:OUT":				"La sortie va au sélecteur IR et à la CU",
	"POC:IR:SIGNALS:C3":				"Confirmez que l'entrée est stockée",
	"POC:RT1:STATES:IN":				"L'entrée est le bus interne",
	"POC:RT1:STATES:OUT":				"La sortie va au select-rt1",
	"POC:RT1:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"POC:SR:STATES:IN":				"L'entrée est la sortie du M7",
	"POC:SR:STATES:OUT":				"La sortie va à l'entrée T8 et à la CU",
	"POC:SR:SIGNALS:CTL":				"Confirmez que l'entrée est stockée",
	"POC:REGISTER_FILE:STATES:A":			"Sortie de RF vers T9 et MA/0",
	"POC:REGISTER_FILE:STATES:B":			"Sortie de RF vers T10 et MB/0",
	"POC:REGISTER_FILE:STATES:C":			"Entrée vers RF depuis le bus interne",
	"POC:REGISTER_FILE:SIGNALS:RA":			"Sélectionnez le registre dont la valeur est envoyée à A",
	"POC:REGISTER_FILE:SIGNALS:RB":			"Sélectionnez le registre dont la valeur est envoyée à B",
	"POC:REGISTER_FILE:SIGNALS:RC":			"Sélectionnez le registre où la valeur de C est stockée",
	"POC:REGISTER_FILE:SIGNALS:LC":			"Confirmez que RC va être mis à jour",
	"POC:CPU_ALU:STATES:A":				"Sortie du multiplexeur MUX A",
	"POC:CPU_ALU:STATES:B":				"Sortie du multiplexeur MUX B",
	"POC:CPU_ALU:STATES:ALU":			"Le résultat va à l'entrée de T6 et RT3",
	"POC:CPU_ALU:STATES:FLAGS":			"Drapeaux C,V,N,Z mis à jour",
	"POC:CPU_ALU:SIGNALS:COP":			"Code opération (+, -, *, ...)",
	"POC:SELECT_RT1:STATES:MUX_I":			"Entrée de SELECT-RT1 depuis RT1",
	"POC:SELECT_RT1:STATES:MUX_O":			"Sortie vers le bus interne via T3",
	"POC:SELECT_RT1:SIGNALS:SE":			"Signer l'extension",
	"POC:SELECT_RT1:SIGNALS:SIZE":			"Taille",
	"POC:SELECT_RT1:SIGNALS:OFFSET":		"Décalage",
	"POC:MEMORY:STATES:ADDR":			"Bus d'adresses",
	"POC:MEMORY:STATES:DATA":			"Bus de données",
	"POC:MEMORY:STATES:MRDY":			"Mémoire prête",
	"POC:MEMORY:SIGNALS:BW":			"Largeur d'octets",
	"POC:MEMORY:SIGNALS:R":				"Lire",
	"POC:MEMORY:SIGNALS:W":				"Ecrire",
	"POC:IO:STATES:ADDR":				"Bus d'adresses",
	"POC:IO:STATES:DATA":				"Bus de données",
	"POC:IO:SIGNALS:IOR":				"Lire depuis le périphérique IO",
	"POC:IO:SIGNALS:IOW":				"Écrire dans le périphérique IO",
	"POC:KEYBOARD:STATES:ADDR":			"Bus d'adresses",
	"POC:KEYBOARD:STATES:DATA":			"Bus de données",
	"POC:KEYBOARD:SIGNALS:IOR":			"Lire depuis le clavier",
	"POC:DISPLAY:STATES:ADDR":			"Bus d'adresses",
	"POC:DISPLAY:STATES:DATA":			"Bus de données",
	"POC:DISPLAY:SIGNALS:IOR":			"Lire depuis l'écran (désactivé)",
	"POC:DISPLAY:SIGNALS:IOW":			"Écrire dans l'écran",
	"POC:L3D:STATES:ADDR":				"Bus d'adresses",
	"POC:L3D:STATES:DATA":				"Bus de données",
	"POC:L3D:SIGNALS:IOR":				"Lire depuis L3D",
	"POC:L3D:SIGNALS:IOW":				"Écrire dans le L3D", 

	"_last_":				    "_last_"

    } ;

