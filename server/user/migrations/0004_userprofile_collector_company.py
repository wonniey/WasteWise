# Generated by Django 4.2.16 on 2024-10-14 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_alter_userprofile_collector_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='collector_company',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]