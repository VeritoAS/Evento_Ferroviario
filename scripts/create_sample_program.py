from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "docs" / "programa-ejemplo.pdf"
LOGO = ROOT / "public" / "assets" / "logo-congreso.jpg"
FONT = Path("C:/Windows/Fonts/arial.ttf")
FONT_BOLD = Path("C:/Windows/Fonts/arialbd.ttf")


def create_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("Arial", str(FONT)))
    pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_BOLD)))

    page = canvas.Canvas(str(OUTPUT), pagesize=A4)
    width, height = A4
    green = HexColor("#063D31")
    gold = HexColor("#BD9354")
    ink = HexColor("#263C35")

    page.setFillColor(green)
    page.rect(0, height - 112, width, 112, fill=1, stroke=0)
    page.drawImage(str(LOGO), 44, height - 97, 77, 77, preserveAspectRatio=True, mask="auto")
    page.setFillColor(HexColor("#FFFFFF"))
    page.setFont("Arial-Bold", 14)
    page.drawString(140, height - 58, "2° CONGRESO FERROVIARIO")
    page.setFont("Arial", 11)
    page.drawString(140, height - 77, "INTERNACIONAL · LOGÍSTICO")

    page.setFillColor(gold)
    page.setFont("Arial-Bold", 11)
    page.drawString(48, height - 175, "DOCUMENTO DE DEMOSTRACIÓN")
    page.setFillColor(green)
    page.setFont("Arial-Bold", 29)
    page.drawString(48, height - 218, "Programa de prueba")
    page.setStrokeColor(gold)
    page.setLineWidth(2)
    page.line(48, height - 237, width - 48, height - 237)

    page.setFillColor(ink)
    page.setFont("Arial", 13)
    page.drawString(48, height - 285, "Este archivo permite comprobar la descarga del programa desde la web.")
    page.drawString(48, height - 310, "El programa oficial de la segunda edición aún está por confirmarse.")

    page.setFillColor(HexColor("#F3F1EA"))
    page.roundRect(48, height - 465, width - 96, 105, 12, fill=1, stroke=0)
    page.setFillColor(green)
    page.setFont("Arial-Bold", 16)
    page.drawString(70, height - 397, "Próximamente")
    page.setFont("Arial", 12)
    page.drawString(70, height - 422, "Conferencias, horarios y participantes oficiales.")

    page.setFillColor(HexColor("#68756F"))
    page.setFont("Arial", 10)
    page.drawString(48, 57, "Celaya, Guanajuato  ·  2° Congreso Ferroviario Internacional Logístico")
    page.drawRightString(width - 48, 57, "PDF DE PRUEBA")
    page.save()
    print(OUTPUT)


if __name__ == "__main__":
    create_pdf()
