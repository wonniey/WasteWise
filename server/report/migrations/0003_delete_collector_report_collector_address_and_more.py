# Generated by Django 5.1.2 on 2024-10-18 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("report", "0002_collector_remove_report_collector_name_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Collector",
        ),
        migrations.AddField(
            model_name="report",
            name="collector_address",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="report",
            name="collector_email",
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name="report",
            name="collector_name",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="report",
            name="user_email",
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name="report",
            name="user_name",
            field=models.CharField(max_length=255, null=True),
        ),
    ]
